import { text } from '~/common/spider'
const R = require('ramda')

export const numberOfString = R.pipe(
  R.defaultTo('0'),
  R.replace(/,/ig, ''),
  parseInt
)

export const formatCounter = R.pipe(
  text,
  R.trim,
  numberOfString
)
