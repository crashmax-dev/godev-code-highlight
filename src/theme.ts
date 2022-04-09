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

  private async dark(): Promise<void> {
    await require('highlight.js/scss/github-dark.scss')
  }

  private async light(): Promise<void> {
    await require('highlight.js/scss/github.scss')
  }
}
