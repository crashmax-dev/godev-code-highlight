import { Theme } from './theme'
import { hightlightCode } from './highlight'
import { clipboardButton } from './clipboard-button'
import './styles.scss'

const theme = new Theme()
theme.apply()

const codeBlocks = document.querySelectorAll<HTMLElement>('pre code')
codeBlocks.forEach((code) => {
  hightlightCode(code)
  clipboardButton(code)
})
