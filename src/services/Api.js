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

export const signin = ({ email, password, username }) => {
  return http.post('/user', { email, password, username })
    .then((res) => res?.data)
}

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

export const deleteSong = (songId) => {
  return http.delete(`/song/${songId}/delete`, { songId })
}

export const createLocation = ({ name, description, lat, lng }) => {
  return http.post('/location/new', { name, description, lat, lng })
}

export const getLocations = () => {
  return http.get('/location')
}

export const deleteLocation = (locationId) => {
  return http.delete(`/location/${locationId}/delete`, { locationId })
}

export const editLocation = (locationId, {name, description}) => {
  return http.patch(`/location/${locationId}/edit`, {name, description})
}

export const getScores = () => {
  return http.get('/gamescore')
}

export const newScore = ({score, level}) => {
  return http.post('/gamescore/new', { score, level })
}

export const getImages = () => {
  return http.get('/image')
}

export const createImage = ({ title, description, date, url }) => {
  return http.post('/image/new', { title, description, date, url })
} 

export const deleteImage = (imageId) => {
  return http.delete(`/image/${imageId}/delete`, { imageId })
}

export const editImage = ( id, {title, date, description}) => {
  return http.patch(`/image/${id}/edit`, { title, date, description })
}

export const getContacts = () => {
  return http.get('/contact')
}

export const createContact = ({ name, role, address, email, phone, birthday, photo, description }) => {
  return http.post('/contact/new', { name, role, address, email, phone, birthday, photo, description })
}

export const deleteContact = (contactId) => {
  return http.delete(`/contact/${contactId}/delete`, { contactId })
}

export const editContact = ( id, {...tempState}) => {
  return http.patch(`/contact/${id}/edit`, {...tempState})
}

export const handleUpload = (theFile) => {
  return http.post('/upload', theFile)
}