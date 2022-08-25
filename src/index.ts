import { clipboardButton } from './clipboard-button.js'
import { hightlightCode } from './highlight.js'
import './styles.scss'
import { Theme } from './theme.js'

const theme = new Theme()
theme.apply()

const codeBlocks = document.querySelectorAll<HTMLElement>('pre > code')
codeBlocks.forEach((code) => {
  hightlightCode(code)
  clipboardButton(code)
})
