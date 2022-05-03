import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import inlineCSSModules from 'vite-plugin-inline-css-modules'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), inlineCSSModules()],
})
