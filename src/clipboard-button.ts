import { el } from 'redom'

export function clipboardButton(element: HTMLElement): void {
  const button = el(
    'button',
    {
      className: 'go-Button go-Button--inline',
      onclick: () => {
        button.textContent = 'Copied'
        let text = element.textContent!
        if (text.charAt(0) === '$') {
          text = text.slice(2)
        }
        navigator.clipboard.writeText(text)
        setTimeout(() => (button.textContent = 'Copy'), 1000)
      }
    },
    'Copy'
  )

  element.parentNode!.append(button)
}
