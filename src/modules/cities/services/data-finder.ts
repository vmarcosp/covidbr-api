import axios from 'axios'
import Papa from 'papaparse'
import { v4 as uuidV4 } from 'uuid'

import { logger } from '~/common/logger'
import { db } from '~/config/database'
import data from '../cities-geolocation.json'

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

interface CityInfo {
  uf: string
  name: string
  latitude: number
  longitude: number
}

const citiesGeolocation = data as CityInfo[]

const toCityName = (value: string) => value.split('/')[0]

const getCityInfo = (cityName: string, uf: string) => {
  const info = citiesGeolocation.find((city: CityInfo) => city.name === cityName && city.uf === uf)

  if (info) return info

  return {
    latitude: 0,
    longitude: 0
  }
}

const createCity = (cityCsvRow: any): City => {
  const { city, totalCases, state } = <CityCsvRow> cityCsvRow
  const name = toCityName(city)
  const { latitude, longitude } = getCityInfo(name, state)

  return {
    id: uuidV4(),
    cases: parseInt(totalCases),
    casesMS: parseInt(totalCases),
    uf: state,
    name,
    deaths: 0,
    casesNotConfirmedByMS: 0,
    latitude,
    longitude
  }
}
const treatData = (cityRow: any): boolean => {
  const cityRowCsv = <CityCsvRow> cityRow
  const name = toCityName(cityRowCsv.city)
  const INVALID_REGEX = /n[aã]o\s+especificada/i

  return !INVALID_REGEX.test(name)
}

export const findAndStoreCities = async () => {
  try {
    logger.info('Buscando dados municipais')
    const { data } = await axios.get(URL)
    const { data: citiesCsv } = Papa.parse(data, parserConfig)
    const cities = citiesCsv
      .filter(treatData)
      .map(createCity)

    await CitiesCollection.clear()
    await CitiesCollection.insert(cities)
    await db.saveDatabase()

    logger.info('Dados municipais armazenados com sucesso')
  } catch (error) {
    logger.error('Erro ao tentar atualizar os dados municipais', error)
  }
}
