import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { getStatesData } from '~/modules/states/services/data-finder'
import { stateMocks } from './mocks/state-mocks'

const mockAxios = new MockAdapter(axios)

mockAxios.onGet('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv').reply(200, stateMocks)

describe('[Unit]::StatesFinder', () => {
  describe('getStatesData', () => {
    it('Deve parsear o csv e retornar os dados continudos no mesmo', async done => {
      const result = await getStatesData()
      expect(result).toEqual(expect.arrayContaining([
        expect.objectContaining({
          uf: 'SP',
          name: 'São Paulo',
          cases: 459,
          casesMS: 459,
          casesNotConfirmedByMS: 0,
          deaths: 15,
          latitude: -23.55,
          longitude: -46.64
        }),
        expect.objectContaining({
          uf: 'RJ',
          name: 'Rio de Janeiro',
          cases: 119,
          casesMS: 119,
          casesNotConfirmedByMS: 0,
          deaths: 3,
          latitude: -22.84,
          longitude: -43.15
        })
      ]))

      done()
    })
  })
})
