import { Option, fold, isSome } from "fp-ts/lib/Option"
import { StateFilterInput } from "../typeDefs/StateFilterInput"
import { StatesCollection } from "~/config/database"
import { State } from '../typeDefs/State'

const filterByName = (filter: string) => ({ name }: State) => (
  name
    .toLowerCase()
    .includes(filter.toLowerCase())
)

const createQuery = fold<StateFilterInput, Object>(
  () => ({}),
  (a: StateFilterInput) => ({ uf: a.uf })
)

export const findStates = (filter: Option<StateFilterInput>) => {
  const query = createQuery(filter)

  const states = StatesCollection.find(query)

  return isSome(filter) && filter.value.name
    ? states.filter(filterByName(filter.value.name))
    : states
}

export default { findStates }
