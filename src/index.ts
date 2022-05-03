import type { Plugin } from 'vite'

type PluginConfig = {
  fileMatch?: RegExp
  tagName?: string
}

const matchInlineCssModules =
  /(?:const|var|let)\s*(\w+)(?:\s*:.*)?\s*=\s*(\w+)\s*`([\s\S]*?)`/gm

export const inlineCss = (
  _: TemplateStringsArray
): Record<string, string> => ({})

export default (config: PluginConfig = {}): Plugin => {
  const fileMatch = config.fileMatch || /\.(tsx|jsx|js|vue|svelte)$/
  const tagName = config.tagName || 'inlineCss'

  let cssModules: Record<string, string> = {}
  const virtualModuleId = 'virtual:inline-css-modules'
  return {
    name: 'inline-css-modules',
    enforce: 'pre',
    buildStart() {
      cssModules = {}
    },
    resolveId(id) {
      if (!id.startsWith(virtualModuleId)) return undefined
      return '\0' + id
    },
    load(id) {
      if (!id.startsWith('\0virtual:inline-css-modules')) return undefined

      const file = id.slice(`\0${virtualModuleId}`.length + 1)
      const css = cssModules[file]
      return css
    },
    transform(src, id) {
      if (!fileMatch.test(id)) return undefined

      src = src.replace(
        /import\s*{\s*inlineCss\s*\s*(?:as\s*\w+\s*)?}\s*from\s*('|"|`)vite-plugin-inline-css-modules\1;?/gm,
        ''
      )

      src = src.replaceAll(matchInlineCssModules, (substring, ...args) => {
        const [variableName, tag, css] = args

        if (tag !== tagName) return substring

        let baseFilename = id.slice(id.lastIndexOf('/') + 1)
        baseFilename = baseFilename.slice(0, baseFilename.lastIndexOf('.'))
        let cnt = 0
        let filename = `${baseFilename}-${cnt}.module.css`
        while (cssModules[filename]) {
          cnt++
          filename = `${baseFilename}-${cnt}.module.css`
        }
        cssModules[filename] = css
        return `import ${variableName} from "virtual:inline-css-modules/${filename}"\n`
      })
      return src
    },
  }
}
