import * as path from 'path'
import GlobalCrawler from '~/modules/global/crawler'
import { fromMockFile } from '../../../helpers/mock-crawler'

const pagePath = path.join(__dirname, 'mocks', 'page.html')

describe('[Unit]:: Global', () => {
  it('deve retornar os dados do globais corretamente', () => {
    const { document } = fromMockFile(pagePath)
    const {
      totalCases,
      totalDeaths,
      totalRecovered,
      activeCases,
      closedCases
    } = GlobalCrawler.getData(document)

    expect(totalCases).toBe(219032)
    expect(totalDeaths).toBe(8953)
    expect(totalRecovered).toBe(84795)
    expect(activeCases).toBe(125284)
    expect(closedCases).toBe(93748)
  })
})
