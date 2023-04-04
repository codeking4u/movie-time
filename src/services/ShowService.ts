const BASE_URL = 'https://api.tvmaze.com'

export const fetchShows = async () => {
  const response = await fetch(`${BASE_URL}/shows`)
  const data = await response.json()
  return data
}
