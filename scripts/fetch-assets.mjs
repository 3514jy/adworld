// 기존 사이트(adworld.or.kr)에서 이미지·음성·PDF를 public/ 폴더로 내려받는 스크립트
// 실행: node scripts/fetch-assets.mjs   (이미 있는 파일은 건너뜀)
import { mkdir, writeFile, access } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SERVICES } from '../app/data/media.js'

const ORIGIN = 'https://www.adworld.or.kr'
const PUBLIC_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const paths = new Set([
  '/favicon.png',
  '/images/logo-new.png',
  '/images/hero-bg.png',
  '/애드월드_회사소개서.pdf',
])
for (const s of SERVICES) {
  s.audio?.forEach((a) => paths.add(a.src))
  s.pairs?.flat().forEach((g) => g.images.forEach((i) => paths.add(i.src)))
  s.groups?.forEach((g) => g.images.forEach((i) => paths.add(i.src)))
  s.subSections?.forEach((sub) => sub.groups.forEach((g) => g.images.forEach((i) => paths.add(i.src))))
}

const exists = (p) => access(p).then(() => true, () => false)
let ok = 0, skip = 0
const failed = []

for (const p of paths) {
  const dest = join(PUBLIC_DIR, p)
  if (await exists(dest)) { skip++; continue }
  try {
    const res = await fetch(ORIGIN + encodeURI(p))
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    ok++
    console.log('받음', p)
  } catch (e) {
    failed.push(`${p} (${e.message})`)
  }
}

console.log(`\n완료: 새로 받음 ${ok}개, 이미 있음 ${skip}개, 실패 ${failed.length}개`)
failed.forEach((f) => console.log('  실패', f))
