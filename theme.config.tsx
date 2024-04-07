import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Password generator</span>,
  project: {
    link: 'https://github.com/',
  },
  editLink:{
    component: null,
  },
  feedback: {
    content: null,
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '',
  },
  
}

export default config
