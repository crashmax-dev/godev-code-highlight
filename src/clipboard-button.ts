import { el } from 'redom'

export function clipboardButton(element: HTMLElement): void {
  const button = el('button', {
    className: 'go-Button go-Button--inline',
    onclick: () => {
      button.textContent = 'Copied'
      navigator.clipboard.writeText(element.textContent!)
      setTimeout(() => button.textContent = 'Copy', 1000)
    }
  }, 'Copy')

  element.parentNode!.append(button)
}
