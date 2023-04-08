const API_LINK = import.meta.env.VITE_API_LINK

export const fetchShows = async () => {
  const response = await fetch(`${API_LINK}/shows`)
  const data = await response.json()
  return data
}
