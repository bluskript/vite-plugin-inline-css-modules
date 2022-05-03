import { defineConfig } from 'vite'
import inlineCSSModules from 'vite-plugin-inline-css-modules'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin(),
    inlineCSSModules({
      tagName: 'css',
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
