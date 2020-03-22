import { JSDOM } from 'jsdom'
import { curry, prop } from 'ramda'
export const WORLD_METER_URL = 'https://www.worldometers.info/coronavirus/'

export const fromURL = async (URL: string) => {
  const { window } = await JSDOM.fromURL(URL)
  const { document } = window

  return { document, window }
}

export const fromContent = (content: string) => {
  const { window } = new JSDOM(content)
  const { document } = window

  return { window, document }
}

export const querySelectorAll = curry((selector: string, $parent: any) => $parent.querySelectorAll(selector))

export const querySelector = curry((selector: string, $parent: any) => $parent.querySelector(selector))

export const text = prop('textContent')

export const href = prop('href')

export const innerHTML = prop('innerHTML')

export const innerText = prop('innerText')

export default { fromURL, fromContent }
