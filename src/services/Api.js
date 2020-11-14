import axios from 'axios'

const http = axios.create({
  // baseURL: 'https://nudo.herokuapp.com',
  baseURL: 'http://localhost:3010',
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

export const activate = (id, token) => {
  return http.post(`/user/${id}/activate/${token}`)
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
    .then((res) => res?.data)
}

export const getLocations = () => {
  return http.get('/location')
}

export const deleteLocation = (locationId) => {
  return http.delete(`/location/${locationId}/delete`, { locationId })
}

export const editLocation = (locationId, {name, description}) => {
  return http.patch(`/location/${locationId}/edit`, {name, description})
    .then((res) => res?.data)
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
    .then((res) => res?.data)
} 

export const deleteImage = (imageId) => {
  return http.delete(`/image/${imageId}/delete`, { imageId })
}

export const editImage = ( id, {title, date, description}) => {
  return http.patch(`/image/${id}/edit`, { title, date, description })
    .then((res) => res?.data)
}

export const getContacts = () => {
  return http.get('/contact')
}

export const createContact = ({ name, role, address, email, phone, birthday, photo, description }) => {
  return http.post('/contact/new', { name, role, address, email, phone, birthday, photo, description })
    .then((res) => res?.data)
}

export const deleteContact = (contactId) => {
  return http.delete(`/contact/${contactId}/delete`, { contactId })
}

export const editContact = ( id, {...tempState}) => {
  return http.patch(`/contact/${id}/edit`, {...tempState})
    .then((res) => res?.data)
}

export const getVideos = () => {
  return http.get('/video')
}

export const createVideo = ({ title, description, videoId, snippet }) => {
  return http.post('/video/new', { title, description, videoId, snippet })
    .then((res) => res?.data)
}

export const deleteVideo = (videoId) => {
  return http.delete(`/video/${videoId}/delete`, { videoId })
}

export const editVideo = ( id, {...tempState}) => {
  return http.patch(`/video/${id}/edit`, {...tempState})
    .then((res) => res?.data)
}

export const handleUpload = (theFile) => {
  return http.post('/upload', theFile)
}