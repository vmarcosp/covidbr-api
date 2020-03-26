import path from 'path'
import BrazilCrawler from '~/modules/brazil/crawler'
import { fromMockFile } from '../../../helpers/mock-crawler'

const pagePath = path.join(__dirname, 'mocks', 'page.html')

describe('[Unit]:: Global', () => {
  it('deve retornar os dados do Brazil corretamente', () => {
    const { document } = fromMockFile(pagePath)
    const {
      totalCases,
      totalDeaths,
      totalRecovered,
      activeCases,
      closedCases
    } = BrazilCrawler.getData(document)

    expect(totalCases).toBe(529)
    expect(totalDeaths).toBe(4)
    expect(totalRecovered).toBe(2)
    expect(activeCases).toBe(523)
    expect(closedCases).toBe(6)
  })
})
