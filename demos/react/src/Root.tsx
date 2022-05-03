import React from 'react'
import { inlineCss } from 'vite-plugin-inline-css-modules'

const classes = inlineCss`
  .root {
    background-color: #1f1;
  }
`

export const Root = () => <div className={classes.root}>Hello world</div>
