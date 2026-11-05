import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import './app.css'

export const links = () => [
  { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap',
  },
]

export function Layout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="bg-bg text-[#1F2937] font-sans antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </MotionConfig>
  )
}
