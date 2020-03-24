import { Option, isNone } from "fp-ts/lib/Option"
import { StateFilterInput } from "../typeDefs/StateFilterInput"
import { StatesCollection } from "~/config/database"

const getName = (filter: StateFilterInput) => filter.name || ''

const createQuery = (filter: Option<StateFilterInput>) => {
  if (isNone(filter)) return {}

  const { value } = filter

  return {
    name: {
      '$regex': [getName(value), 'i']
    },
    uf: value.uf
  }
}


export const findStates = (filter: Option<StateFilterInput>) => {
  const query = createQuery(filter)

  return StatesCollection.find(query)
}

export default { findStates }
