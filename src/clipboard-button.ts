import { el } from 'redom'

export function clipboardButton(element: HTMLElement): void {
  const button = el('button', {
    className: 'go-Button go-Button--inline',
    onclick: () => {
      button.textContent = 'Copied'

      let code = element.textContent!
      if (code[0] === '$') {
        code = code.slice(2)
      }

      navigator.clipboard.writeText(code)
      setTimeout(() => button.textContent = 'Copy', 1000)
    }
  }, 'Copy')

  element.parentNode!.append(button)
}
