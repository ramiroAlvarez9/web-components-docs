import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Answer Races 2024 (Documentación) </span>,
  project: {
    link: null,
  },
  editLink:{
    component: null,
  },
  feedback: {
    content: null,
  },
  chat: {
    link: null,
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Docs'
    }
  }
  
}

export default config
