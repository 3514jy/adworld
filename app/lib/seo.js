export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.adworld.or.kr').replace(/\/$/, '')
export const SITE_NAME = '(주)애드월드'
const DEFAULT_IMAGE = '/images/og-image.png'

// 페이지별 title/description/Open Graph/canonical을 한 번에 생성
export function seo({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const url = SITE_URL + path
  const img = SITE_URL + image
  const fullTitle = path === '/' ? title : `${title} - ${SITE_NAME}`
  return [
    { title: fullTitle },
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'ko_KR' },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: img },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: img },
    { tagName: 'link', rel: 'canonical', href: url },
  ]
}
