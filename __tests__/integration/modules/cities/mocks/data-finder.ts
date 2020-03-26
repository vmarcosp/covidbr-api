export const mockedCsv = `country,state,city,totalCases
Brazil,SP,São Paulo/SP,366
Brazil,RJ,Barra Mansa/RJ,1
Brazil,ES,Vila Velha/ES,17
`

const one = `country,state,city,totalCases
Brazil,AL,NÃO ESPECIFICADA/AL,1
`

const two = `country,state,city,totalCases
Brazil,AL,NAO ESPECIFICADA/AL,1
`
const three = `country,state,city,totalCases
Brazil,AL,não especificada/AL,1
`

const four = `country,state,city,totalCases
Brazil,AL,nao especificada/AL,1
`

export const mockCSVCityWithInvalidCitiesName = {
  'NÃO ESPECIFICADA': one,
  'NAO ESPECIFICADA': two,
  'não especificada': three,
  'nao especificada': four
}
