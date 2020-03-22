import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getStatesData } from '~/modules/states/services/finder'

const mockAxios = new MockAdapter(axios)

mockAxios.onGet('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv').reply(200, `
  csv,scs
`)

describe('[Unit]::StatesFinder', () => {
  describe('getStatesData', () => {
    it('deve buscar e retornar os dados de todos os estados', async done => {
      await getStatesData()

      done()
    })
  })
})
