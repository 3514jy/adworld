import { index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.jsx'),
  route('media/bus', 'routes/media-bus.jsx'),
  route('media/subway', 'routes/media-subway.jsx'),
  route('media/billboard', 'routes/media-billboard.jsx'),
  route('media/etc', 'routes/media-etc.jsx'),
  route('process', 'routes/process.jsx'),
  route('contact', 'routes/contact.jsx'),
  route('history', 'routes/history.jsx'),
]
