import axios from "../index.js"

const country_index = (payload) =>{
    return axios.get(`/api/structure/countries`, {params:payload})
}

const country_store = (payload) =>{
    return axios.post(`/api/structure/countries`, payload.data)
}

const country_update = (payload) =>{
    return axios.put(`/api/structure/countries/${payload.country_id}`, payload.data)
}

const country_delete = (payload) =>{
    return axios.delete(`/api/structure/countries/${payload.country_id}` )
}
const country_edit = (payload) =>{
    return axios.get(`/api/structure/countries/${payload.country_id}/edit`, {params:payload})
}


export default {country_index,country_store,country_update, country_delete, country_edit}