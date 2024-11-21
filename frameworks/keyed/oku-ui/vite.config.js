import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/frameworks/keyed/oku-ui/dist/',
  plugins: [vue()],
})
