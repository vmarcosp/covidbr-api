import { querySelectorAll } from '~/common/spider'
import { GLOBAL_COUNTERS, COUNTERS } from './selectors'
import { formatCounter } from '~/common/normalization'

const getGlobalCounters = querySelectorAll(GLOBAL_COUNTERS)
const getCounters = querySelectorAll(COUNTERS)

export const getData = (document: Document) => {
  const [cases, deaths, recovered] = getGlobalCounters(document)
  const [activeCases, closedCases] = getCounters(document)

  return {
    totalCases: formatCounter(cases),
    totalDeaths: formatCounter(deaths),
    totalRecovered: formatCounter(recovered),
    activeCases: formatCounter(activeCases),
    closedCases: formatCounter(closedCases)
  }
}

export default { getData }
