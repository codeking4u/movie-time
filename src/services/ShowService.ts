import axios from 'axios'
const API_LINK = import.meta.env.VITE_API_LINK

export const fetchShows = async () => {
  const response = await axios.get(`${API_LINK}/shows`)
  return response.data
}

export const fetchEpisodes = async (id) => {
  const response = await axios.get(`${API_LINK}/shows/${id}/episodes`)
  return response.data
}

export const searchShowsAPI = async (value) => {
  const response = await axios.get(`${API_LINK}/search/shows?q=${value}`)
  return response.data
}

export const fetchSingleShow = async (id) => {
  const response = await axios.get(`${API_LINK}/shows/${id}`)
  return response.data
}
