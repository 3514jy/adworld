// 서버 없이 정적 사이트로 빌드하되, 아래 경로는 빌드 시 내용이 채워진 HTML을 미리 생성 (구글·카카오 미리보기용)
export default {
  // 기준 경로 (vite.config.js의 base와 같은 값). 평소엔 '/', GitHub Pages용 빌드에선 '/adworld/'
  basename: process.env.BASE_PATH || '/',
  ssr: false,
  prerender: [
    '/',
    '/media/bus',
    '/media/subway',
    '/media/billboard',
    '/media/etc',
    '/process',
    '/contact',
    '/history',
  ],
}
