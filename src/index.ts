import { Theme } from './theme.js'
import { hightlightCode } from './highlight.js'
import { clipboardButton } from './clipboard-button.js'
import './styles.scss'

const theme = new Theme()
theme.apply()

const codeBlocks = document.querySelectorAll<HTMLElement>('pre > code')
codeBlocks.forEach((code) => {
  hightlightCode(code)
  clipboardButton(code)
})
