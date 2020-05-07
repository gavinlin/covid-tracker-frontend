import axios from 'axios'

const url = 'http://192.168.64.2:31515/api/data/'
//const url = "http://localhost:8080/api/countries"

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url + 'latest')
    return data
  } catch (error) {

  }
}

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(url + 'daily')

    return response.data
  } catch (error) {

  }
}