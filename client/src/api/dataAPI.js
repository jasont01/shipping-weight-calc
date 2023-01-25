import axios from 'axios'

const dataAPI = axios.create({
  baseURL: '/api/data',
})

const getData = async () => {
  const response = await dataAPI.get('/')

  return response.data
}

export { getData }
