import axios from 'axios'

const KEY = 'AIzaSyAmk5eQJdZrc_PNmwic_T4wqY0xLH9f2jY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    },
    headers: {}
})