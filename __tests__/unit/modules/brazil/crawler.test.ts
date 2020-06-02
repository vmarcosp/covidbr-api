import path from 'path'
import BrazilCrawler from '~/modules/brazil/crawler'
import { fromMockFile } from '../../../helpers/mock-crawler'

const pagePath = path.join(__dirname, 'mocks', 'page.html')

describe('[Unit]:: Brazil', () => {
  it('deve retornar os dados do Brazil corretamente', () => {
    const { document } = fromMockFile(pagePath)
    const {
      totalCases,
      totalDeaths,
      totalRecovered,
      activeCases,
      closedCases
    } = BrazilCrawler.getData(document)

    expect(totalCases).toBe(529405)
    expect(totalDeaths).toBe(30046)
    expect(totalRecovered).toBe(211080)
    expect(activeCases).toBe(288279)
    expect(closedCases).toBe(241126)
  })
})
