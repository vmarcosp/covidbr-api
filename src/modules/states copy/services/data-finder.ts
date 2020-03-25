import axios from 'axios'
import Papa from 'papaparse'
import { states } from '~/modules/states/states-informations'
import { State } from '../typeDefs/State'

const URL = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv'

interface StateDataCsv {
  state: string
  totalCases: string
  totalCasesMS: string
  notConfirmedByMS: string
  deaths: string
}

export const getStatesData = async (): Promise<State[]> => {
  const response = await axios.get(URL)
  const { data } = Papa.parse(response.data, { header: true, skipEmptyLines: true })
  const [, ...dataWithoutTotal] = data

  return dataWithoutTotal
    .map((stateData: StateDataCsv) => {
      const { state, totalCases, totalCasesMS, notConfirmedByMS, deaths } = stateData
      const uf = state.toUpperCase()
      const { name, latitude, longitude } = states[uf]
      return {
        uf,
        name,
        latitude,
        longitude,
        cases: parseInt(totalCases),
        casesMS: parseInt(totalCasesMS),
        casesNotConfirmedByMS: parseInt(notConfirmedByMS),
        deaths: parseInt(deaths)
      }
    })
}
