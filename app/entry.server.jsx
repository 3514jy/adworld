// 빌드 시 페이지별 HTML(프리렌더)을 만드는 진입점. React Router 기본 파일(entry.server.node.tsx)과 동일하고,
// 출력에서 NUL(0x00) 바이트를 걸러내는 단계 하나만 추가했다.
//
// 이유: React 18.3의 서버 스트림은 2KB 버퍼 끝에 한글(3바이트)이 다 안 들어가면
// 남은 빈칸을 0x00으로 채운 채 내보낸다. 글자는 지워지지 않고 0x00만 덧붙으므로(예: "노\0\0출")
// 0x00만 빼면 원래 HTML과 똑같아진다. 정상 HTML에는 0x00이 들어갈 일이 없다.
import { PassThrough, Transform } from 'node:stream'
import { createReadableStreamFromReadable } from '@react-router/node'
import { ServerRouter } from 'react-router'
import { isbot } from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'

export const streamTimeout = 5_000

const stripNul = () =>
  new Transform({
    transform(chunk, _enc, callback) {
      const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
      callback(null, buf.includes(0) ? buf.filter((b) => b !== 0) : buf)
    },
  })

export default function handleRequest(request, responseStatusCode, responseHeaders, routerContext) {
  if (request.method.toUpperCase() === 'HEAD') {
    return new Response(null, { status: responseStatusCode, headers: responseHeaders })
  }

  return new Promise((resolve, reject) => {
    let shellRendered = false
    const userAgent = request.headers.get('user-agent')

    // 검색엔진 봇·프리렌더 시에는 모든 내용이 준비될 때까지 기다렸다가 응답
    const readyOption = (userAgent && isbot(userAgent)) || routerContext.isSpaMode ? 'onAllReady' : 'onShellReady'

    let timeoutId = setTimeout(() => abort(), streamTimeout + 1000)

    const { pipe, abort } = renderToPipeableStream(<ServerRouter context={routerContext} url={request.url} />, {
      [readyOption]() {
        shellRendered = true
        const body = new PassThrough({
          final(callback) {
            clearTimeout(timeoutId)
            timeoutId = undefined
            callback()
          },
        })
        const filter = stripNul()
        filter.pipe(body)
        const stream = createReadableStreamFromReadable(body)

        responseHeaders.set('Content-Type', 'text/html')
        pipe(filter)

        resolve(new Response(stream, { headers: responseHeaders, status: responseStatusCode }))
      },
      onShellError(error) {
        reject(error)
      },
      onError(error) {
        responseStatusCode = 500
        if (shellRendered) console.error(error)
      },
    })
  })
}
