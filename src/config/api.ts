import qs from 'qs'
const R = require('ramda')

export enum CaseType {
  DISCARDED = 'Caso_Descartado',
  SUSPECTS = 'Caso_Suspeito',
  CONFIRMED = 'Caso_Confirmado'
}

const baseUrl = `https://services.arcgis.com/4CZwpdWHGNPLU7QQ/arcgis/rest/services/Estados_Corona/FeatureServer/0/query?f=json`

const defaultParams = {
  returnGeometry: true,
  spatialRel: 'esriSpatialRelIntersects',
  outFields: '*',
}

export const createUrl = (type: CaseType) => {
  const params = R.merge(defaultParams, {
    where: `${type} <> 0`
  })

  return `${baseUrl}&${qs.stringify(params)}`
}
