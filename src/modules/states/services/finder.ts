import axios from 'axios'

const URL = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv'

export const getStatesData = async () => {
  const response = await axios.get(URL)

  console.log(response)
  return []
}
