import * as fs from 'fs'
import { JSDOM } from 'jsdom'

export const fromMockFile = (path: string) => {
  const buffer = fs.readFileSync(path)
  const content = buffer.toString()

  const { window } = new JSDOM(content)

  return { window, document: window.document }
}
