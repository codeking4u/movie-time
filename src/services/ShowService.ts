import axios from 'axios'
const API_LINK = import.meta.env.VITE_API_LINK
const ERROR_MSG =
  'Uh oh! It looks like our server is being shy and doesnt want to talk to us right now. \nError info: '
export const fetchShows = async () => {
  try {
    const response = await axios.get(`${API_LINK}/shows`)
    return response.data
  } catch (error) {
    alert(`${ERROR_MSG} : ${error}`)
  }
}

export const fetchEpisodes = async (id) => {
  try {
    const response = await axios.get(`${API_LINK}/shows/${id}/episodes`)
    return response.data
  } catch (error) {
    alert(`${ERROR_MSG} : ${error}`)
  }
}

export const searchShowsAPI = async (value) => {
  try {
    const response = await axios.get(`${API_LINK}/search/shows?q=${value}`)
    return response.data
  } catch (error) {
    alert(`${ERROR_MSG} : ${error}`)
  }
}

export const fetchSingleShow = async (id) => {
  try {
    const response = await axios.get(`${API_LINK}/shows/${id}`)
    return response.data
  } catch (error) {
    alert(`${ERROR_MSG} : ${error}`)
  }
}
