import dark from 'highlight.js/styles/github-dark.css?inline'
import light from 'highlight.js/styles/github.css?inline'

export class Theme {
  private theme: string

  constructor() {
    this.theme = document.documentElement.getAttribute('data-theme')!
  }

  apply(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)')

    if (this.theme === 'auto') {
      if (prefersDark.matches) {
        this.dark()
      }

      if (prefersLight.matches) {
        this.light()
      }
    }

    if (this.theme === 'dark') {
      this.dark()
    }

    if (this.theme === 'light') {
      this.light()
    }
  }

  private dark(): void {
    GM_addStyle(`.Article pre { background: #0d1117 !important; }`)
    GM_addStyle(dark)
  }

  private light(): void {
    GM_addStyle(`.Article pre { background: #fff !important; }`)
    GM_addStyle(light)
  }
}
