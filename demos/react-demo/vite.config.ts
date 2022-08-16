import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import inlineCSSModules from 'vite-plugin-inline-css-modules'
import pluginInspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [inlineCSSModules(), react(), pluginInspect()],
  build: {
    sourcemap: true,
  },
})
