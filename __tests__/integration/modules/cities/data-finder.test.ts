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
          cases: 366,
          deaths: 0,
          casesMS: 366,
          casesNotConfirmedByMS: 0
        }),
        expect.objectContaining({
          name: 'Barra Mansa',
          uf: 'RJ',
          cases: 1,
          deaths: 0,
          casesMS: 1,
          casesNotConfirmedByMS: 0
        }),
        expect.objectContaining({
          name: 'Vila Velha',
          uf: 'ES',
          cases: 17,
          deaths: 0,
          casesMS: 17,
          casesNotConfirmedByMS: 0
        })
      ]))

      done()
    })
  })
})

// const result = [
//   casesMS: 366,
//   casesNotConfirmedByMS: 0,
//   deaths: 0,
//   name: 'São Paulo',
//   uf: 'SP'
// },
// {
//   $loki: 2,
//   cases: 1,
//   casesMS: 1,
//   casesNotConfirmedByMS: 0,
//   deaths: 0,
//   meta: {
//     created: 1585115626644,
//     revision: 0,
//     version: 0
//   },
//   name: 'Barra Mansa',
//   uf: 'RJ'
// }, {
//   $loki: 3,
//   cases: 17,
//   casesMS: 17,
//   casesNotConfirmedByMS: 0,
//   deaths: 0,
//   meta: {
//     created: 1585115626644,
//     revision: 0,
//     version: 0
//   },
//   name: 'Vila Velha',
//   uf: 'ES'
// }]
