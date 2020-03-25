import { Option, fold, isNone } from 'fp-ts/lib/Option'
import { CityFilterInput } from '../typeDefs/CityFilterInput'
import { CitiesCollection } from '../collection'
import { PaginationInput } from '~/common/pagination'

const createQuery = fold(
  () => ({}),
  (filter: CityFilterInput) => ({
    name: { $regex: [filter.name, 'i'] },
    uf: { $regex: [filter.uf, 'i'] },
    id: { $regex: [filter.id, 'i'] }
  })
)

export const findCity = (filter: Option<CityFilterInput>) => {
  const query = createQuery(filter)

  return CitiesCollection.findOne(query)
}

export const findCities = (filter: Option<CityFilterInput>, pagination: Option<PaginationInput>) => {
  const query = createQuery(filter)

  const cities = CitiesCollection.find(query)

  if (isNone(pagination)) return cities

  const { offset, first } = pagination.value

  return cities.slice(offset * first, offset * first + first)
}
