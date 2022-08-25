import { defineConfig } from 'vite'
import { UserscriptPlugin } from 'vite-userscript-plugin'
import { name, description, author, version } from './package.json'

export default defineConfig({
  plugins: [
    UserscriptPlugin({
      entry: 'src/index.ts',
      metadata: {
        name,
        description,
        version,
        author: author.name,
        match: 'https://go.dev/doc/*'
      }
    })
  ]
})
