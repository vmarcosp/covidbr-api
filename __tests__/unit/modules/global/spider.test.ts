import *  as path from 'path'
import GlobalSpider from '~/modules/global/spider'
import { fromMockFile } from '../../../helpers/mock-crawler'

const pagePath = path.join(__dirname, 'mocks', 'page.html')

describe('[Unit]:: Global', () => {
  it('should return the global data correctly', () => {
    const { document } = fromMockFile(pagePath)
    const {
      totalCases,
      totalDeaths,
      totalRecovered,
      activeCases,
      closedCases
    } = GlobalSpider.getData(document)

    expect(totalCases).toBe(219.032)
    expect(totalDeaths).toBe(8.953)
    expect(totalRecovered).toBe(84.795)
    expect(activeCases).toBe(125.284)
    expect(closedCases).toBe(93.748)
  })
})
