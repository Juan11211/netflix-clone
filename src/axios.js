import axios from 'axios' // promise based library

const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance 