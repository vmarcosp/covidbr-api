import { COUNTRIES } from './selectors'
import { formatCounter } from '~/common/normalization'

export const getData = (document: Document) => {
  const rows = document.querySelectorAll(COUNTRIES)

  const brazilRow = Array.from(rows).find(row => {
    const countryName = row.querySelector('td')?.textContent
    return countryName === 'Brazil'
  })

  if (!brazilRow) throw new Error('Internal error')

  const [, $totalCases, , $totalDeaths, , $totalRecovered, $activeCases] = Array.from(brazilRow.querySelectorAll('td'))

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
