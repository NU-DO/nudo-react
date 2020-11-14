import axios from 'axios'

const KEY = 'AIzaSyD13SRYMAQI56CgJhb2TNWgUP2K4-jiDlQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    },
    headers: {}
})