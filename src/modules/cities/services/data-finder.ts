import axios from 'axios'
import Papa from 'papaparse'
import { v4 as uuid } from 'uuid'

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
  deaths: string
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

const createCity = ({ city, deaths, totalCases, state }: CityCsvRow): City => {
  const name = toCityName(city)
  const { latitude, longitude } = getCityInfo(name, state)

  return {
    id: uuid(),
    cases: parseInt(totalCases),
    casesMS: parseInt(totalCases),
    deaths: parseInt(deaths),
    uf: state,
    name,
    casesNotConfirmedByMS: 0,
    latitude,
    longitude
  }
}

export const findAndStoreCities = async () => {
  try {
    logger.info('Buscando dados municipais')
    const { data } = await axios.get(URL)
    const { data: citiesCsv } = Papa.parse(data, parserConfig)
    const cities = citiesCsv.map(createCity)

    await CitiesCollection.clear()
    await CitiesCollection.insert(cities)
    await db.saveDatabase()

    logger.info('Dados municipais armazenados com sucesso')
  } catch (error) {
    logger.error('Erro ao tentar atualizar os dados municipais', error)
  }
}
