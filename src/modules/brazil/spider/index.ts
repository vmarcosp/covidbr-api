import { COUNTRIES } from './selectors'
import { text } from '~/common/spider'
const R = require('ramda')

const floatOfString = R.pipe(
  R.defaultTo('0'),
  R.replace(',', '.'),
  parseFloat
)

const formatColumnData = R.pipe(
  text,
  R.trim,
  floatOfString
)

export const getData = (document: Document) => {
  const rows = document.querySelectorAll(COUNTRIES)

  const brazilRow = Array.from(rows).find(row => {
    const countryName = row.querySelector('td')?.textContent
    return countryName === 'Brazil'
  })

  if (!brazilRow) throw new Error('Internal error')

  const [, $totalCases, , $totalDeaths, , $totalRecovered, $activeCases] = Array.from(brazilRow.querySelectorAll('td'))

  const totalDeaths = formatColumnData($totalDeaths)
  const totalRecovered = formatColumnData($totalRecovered)

  return {
    totalDeaths,
    totalCases: formatColumnData($totalCases),
    activeCases: formatColumnData($activeCases),
    totalRecovered,
    closedCases: totalDeaths + totalRecovered
  }
}


export default { getData }
