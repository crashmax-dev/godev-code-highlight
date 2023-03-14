import { clipboardButton } from './clipboard-button.js'
import { hightlightCode } from './highlight.js'
import { Theme } from './theme.js'
import './styles.scss'

const theme = new Theme()
theme.apply()

const preBlocks = document.querySelectorAll<HTMLElement>('pre')
const preCodeBlocks = document.querySelectorAll<HTMLElement>('pre > code')

if (preBlocks.length > 0 && preCodeBlocks.length === 0) {
  preBlocks.forEach((code) => applyHighlight(code))
} else {
  preCodeBlocks.forEach((code) => applyHighlight(code))
}

function applyHighlight(code: HTMLElement) {
  hightlightCode(code)
  clipboardButton(code)
}
