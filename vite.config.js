import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH: 사이트가 올라갈 기준 경로. 평소엔 '/', GitHub Pages(3514jy.github.io/adworld/)용 빌드에선 '/adworld/'
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [tailwindcss(), reactRouter()],
})
