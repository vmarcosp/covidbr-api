import axios from 'axios'
import Papa from 'papaparse'

import { logger } from '~/common/logger'
import { db } from '~/config/database'

import { City } from '../typeDefs/City'
import { CitiesCollection } from '../collection'

const URL = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv'

const parserConfig = {
  header: true,
  skipEmptyLines: true
}

interface CityCsvRow {
  country: string
  state: string
  city: string
  totalCases: string
}

const toCityName = (value: string) => value.split('/')[0]

const createCity = ({ city, totalCases, state }: CityCsvRow): City => ({
  cases: parseInt(totalCases),
  casesMS: parseInt(totalCases),
  uf: state,
  name: toCityName(city),
  deaths: 0,
  casesNotConfirmedByMS: 0
})

export const findAndStoreCities = async () => {
  try {
    const { data } = await axios.get(URL)
    const { data: citiesCsv } = Papa.parse(data, parserConfig)
    const cities = citiesCsv.map(createCity)

    await CitiesCollection.clear()
    await CitiesCollection.insert(cities)
    await db.saveDatabase()
  } catch (error) {
    logger.error('Erro ao tentar atualizar os dados das cidades')
  }
}
