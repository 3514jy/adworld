import MediaPage from '../components/MediaPage'
import { SERVICES, MEDIA_SEO } from '../data/media'
import { seo } from '../lib/seo'

const ID = 'services-bus'
const media = SERVICES.find((s) => s.id === ID)

export const meta = () => seo(MEDIA_SEO[ID])

export default function Page() {
  return <MediaPage media={media} />
}
