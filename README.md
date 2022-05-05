# vite-plugin-inline-css-modules

[![npm](https://img.shields.io/npm/v/vite-plugin-inline-css-modules.svg)](https://www.npmjs.com/package/vite-plugin-inline-css-modules)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Write CSS modules without leaving your javascript!

- Zero Runtime
- Contains full feature set of CSS modules (Includes PostCSS if you use that!)
  - Supports `@apply` and others!
  - Scopes your CSS locally to your component!
- Supports ANY framework

### Usage

```
npm install vite-plugin-inline-css-modules
```

```ts
import inlineCssModules from 'vite-plugin-inline-css-modules'

export default {
  plugins: [inlineCssModules()],
}
```

```ts
import { css } from 'vite-plugin-inline-css-modules'

const classes = css`
  .root {
    background-color: #1f1;
    @apply rounded-md;
  }
`

export const Root = () => <div class={classes.root}>Hello world</div>
```

### Why is this useful?

This was originally written for writing styles in SolidJS. I came from Vue, which already contained a special `<style scoped>` tag, and I wanted something just as easy to use as that. If you are using a framework that does not support writing scoped styles natively, this is for you!

### Why not one of the hundreds of existing CSS-in-JS solutions?

Every single CSS-in-JS solution i've seen suffers from the same problem: it can't integrate with existing tooling.
This plugin simply generates a CSS module using the contents of the string. This allows it to integrate with PostCSS
and things like Tailwind or UnoCSS with ease.

In addition, a lot of solutions also have an implicit bundling cost. This differs in that it is completely based on CSS modules. 
No addition javascript is added when using this plugin.

### Caveats

- This plugin does NOT support string interpolation. It may seem that way from the use of template strings, but I assure you, all this plugin does is move the contents of the string template **into a real CSS module**, meaning you **cannot** interpolate strings.

- You CANNOT manipulate the classes variables as normal JS variables.

  Why? because at compile time, this plugin transforms:

  ```ts
  const classes = css``
  ```

  into:

  ```ts
  import classes from 'virtual:inline-css-modules/App-0.module.css'
  ```

### Plugin Options

- `tagName`: The CSS template tag name to match for.
  - Default: `css`
  - If you are using other CSS-in-JS frameworks, you can use import aliases during destructuring and set the tagName value to the new name to prevent conflicts.
- `fileMatch`: The regex pattern used to match files to inline.
  - Default: `/\.(tsx|jsx|js|vue|svelte)$/`

### Help

- I'm getting an error like `inlineCss is not defined`!
  - This is probably because you didn't set the tag name correctly in config.
    This plugin might be deleting your import of `inlineCss` from this plugin, so please check to make sure that the `tagName` option is set correctly.
