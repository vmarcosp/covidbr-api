import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getStatesData } from '~/modules/states/services/finder'
import { stateMocks } from './mocks/state-mocks'

const mockAxios = new MockAdapter(axios)

mockAxios.onGet('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv').reply(200, stateMocks)

const expected = [
  {
    uf: "SP",
    name: "São Paulo",
    cases: 459,
    casesMS: 459,
    casesNotConfirmedByMS: 0,
    deaths: 15,
    latitude: -9.48000405,
    longitude: -35.83996769
  },
  {
    uf: "RJ",
    name: "Rio de Janeiro",
    cases: 119,
    casesMS: 119,
    casesNotConfirmedByMS: 0,
    deaths: 3,
    latitude: -9.48000405,
    longitude: -35.83996769
  }
]

describe('[Unit]::StatesFinder', () => {
  describe('getStatesData', () => {
    it('Deve parsear o csv e retornar os dados continudos no mesmo', async done => {
      const result = await getStatesData()
      expect(result).toEqual(expect.arrayContaining(expected))
      done()
    })
  })
})
