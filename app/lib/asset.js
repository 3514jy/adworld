// public/ 폴더 파일(이미지·음성·PDF) 주소에 기준 경로를 붙인다.
// 평소엔 '/images/a.jpg' 그대로, GitHub Pages용 빌드에선 '/adworld/images/a.jpg'
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const asset = (path) => (typeof path === 'string' && path.startsWith('/') ? BASE + path : path)
