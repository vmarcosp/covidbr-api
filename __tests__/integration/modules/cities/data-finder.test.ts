import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { findAndStoreCities } from '~/modules/cities/services/data-finder'
import { CitiesCollection } from '~/modules/cities/collection'

import { mockedCsv } from './mocks/data-finder'

const mockAxios = new MockAdapter(axios)

const URL = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv'

describe('[Integration]:: Cities - DataFinder', () => {
  describe('findCitiesAndStore', () => {
    it('deve buscar e armazenar corretamente as cidades', async done => {
      mockAxios.onGet(URL).reply(200, mockedCsv)
      await findAndStoreCities()

      const cities = await CitiesCollection.find()
      expect(cities).toEqual(expect.arrayContaining([
        expect.objectContaining({
          name: 'São Paulo',
          uf: 'SP',
          cases: 1885,
          deaths: 121,
          casesMS: 1885,
          casesNotConfirmedByMS: 0,
          latitude: -23.5329,
          longitude: -46.6395
        }),
        expect.objectContaining({
          name: 'Barra Mansa',
          uf: 'RJ',
          cases: 2,
          deaths: 0,
          casesMS: 2,
          casesNotConfirmedByMS: 0,
          latitude: -22.5481,
          longitude: -44.1752
        }),
        expect.objectContaining({
          name: 'Vila Velha',
          uf: 'ES',
          cases: 35,
          deaths: 0,
          casesMS: 35,
          casesNotConfirmedByMS: 0,
          latitude: -20.3417,
          longitude: -40.2875
        })
      ]))

      done()
    })
  })
})
