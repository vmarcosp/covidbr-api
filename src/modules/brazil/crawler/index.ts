import { COUNTRIES } from './selectors'
import { formatCounter } from '~/common/normalization'

export const getData = (document: Document) => {
  const rows = document.querySelectorAll(COUNTRIES)

  const brazilRow = Array.from(rows).find(row => {
    const columns = Array.from(row.querySelectorAll('td'))
    if (columns.length > 0) {
      const [, countryCell] = columns
      return countryCell?.textContent === 'Brazil'
    }

    return false
  })

  if (!brazilRow) throw new Error('Internal error')

  const [, , $totalCases, , $totalDeaths, , $totalRecovered, , $activeCases] = Array.from(brazilRow.querySelectorAll('td'))

  const totalDeaths = formatCounter($totalDeaths)
  const totalRecovered = formatCounter($totalRecovered)

  return {
    totalDeaths,
    totalCases: formatCounter($totalCases),
    activeCases: formatCounter($activeCases),
    totalRecovered,
    closedCases: totalDeaths + totalRecovered
  }
}

export default { getData }
