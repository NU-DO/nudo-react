import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  if (error.response?.status === 401) {
    localStorage.clear()
    window.location.assign('/login')
  }

  return Promise.reject(error)
})

export const login = ({ email, password }) => http.post('/login', { email, password })

export const logout = () => http.post('/logout')


export const getSongsFromSpotify = ({ search }) => {
  return http.post('/songsSpotify', {search})
}

export const createSong = ({ name, url, artists, decade, album }) => {
  return http.post('/song/new', { name, url, artists, decade, album })
}

export const getSongs = () => {
  return http.get('/song')
}

export const deleteSong = (id) => {
  return http.delete(`/song/${id}/delete`, { id })
}

export const createLocation = ({ name, description, lat, lng }) => {
  return http.post('/location/new', { name, description, lat, lng })
}

export const getLocations = () => {
  return http.get('/location')
}

export const deleteLocation = (id) => {
  return http.delete(`/location/${id}/delete`, { id })
}

export const editLocation = (id, body) => {
  return http.patch(`/location/${id}/edit`, { body })
}