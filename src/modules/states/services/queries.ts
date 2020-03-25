import { Option, fold, isNone } from 'fp-ts/lib/Option'
import { StateFilterInput } from '../typeDefs/StateFilterInput'
import { StatesCollection } from '../collection'
import { PaginationInput } from '~/common/pagination'

const createQuery = fold(
  () => ({}),
  ({ uf, name }: StateFilterInput) => ({
    name: { $regex: [name, 'i'] },
    uf: { $regex: [uf, 'i'] }
  })
)

export const findStates = (filter: Option<StateFilterInput>, pagination: Option<PaginationInput>) => {
  const query = createQuery(filter)
  const states = StatesCollection.find(query)

  if (isNone(pagination)) return states

  const { offset, first } = pagination.value

  return states.slice(offset * first, offset * first + first)
}

export const findState = (filter: Option<StateFilterInput>) => {
  const query = createQuery(filter)

  return StatesCollection.findOne(query)
}

export default { findStates }
