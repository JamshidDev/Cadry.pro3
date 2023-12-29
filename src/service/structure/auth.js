import axios from "../index.js"

const loginUser = (payload) =>{
    return axios.post(`/api/login`, payload.data)
}


export default {loginUser}