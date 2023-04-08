const API_LINK = import.meta.env.VITE_API_LINK

export const fetchShows = async () => {
  const response = await fetch(`${API_LINK}/shows`)
  const data = await response.json()
  return data
}

export const fetchEpisodes = async (id) => {
  const response = await fetch(`${API_LINK}/shows/${id}/episodes`)
  const data = await response.json()
  return data
}

export const searchShowsAPI = async (value) => {
  const response = await fetch(`${API_LINK}/search/shows?q=${value}`)
  const data = await response.json()
  return data
}

export const fetchSingleShow = async (id) => {
  const response = await fetch(`${API_LINK}/shows/${id}`)
  const data = await response.json()
  return data
}
