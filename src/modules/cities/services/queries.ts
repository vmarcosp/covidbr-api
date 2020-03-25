import { Option, fold } from 'fp-ts/lib/Option'
import { CityFilterInput } from '../typeDefs/CityFilterInput'
import { CitiesCollection } from '../collection'

const createQuery = fold(
  () => ({}),
  (filter: CityFilterInput) => ({
    name: { $regex: [filter.name, 'i'] },
    uf: { $regex: [filter.uf, 'i'] }
  })
)

export const findCity = (filter: Option<CityFilterInput>) => {
  const query = createQuery(filter)

  return CitiesCollection.findOne(query)
}

export const findCities = (filter: Option<CityFilterInput>) => {
  const query = createQuery(filter)

  return CitiesCollection.find(query)
}
