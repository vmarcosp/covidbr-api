import { Option, fold } from 'fp-ts/lib/Option'
import { StateFilterInput } from '../typeDefs/StateFilterInput'
import { StatesCollection } from '~/config/database'

const createQuery = fold(
  () => ({}),
  ({ uf, name }: StateFilterInput) => ({
    name: { $regex: [name, 'i'] },
    uf: { $regex: [uf, 'i'] }
  })
)

export const findStates = (filter: Option<StateFilterInput>) => {
  const query = createQuery(filter)

  return StatesCollection.find(query)
}

export default { findStates }
