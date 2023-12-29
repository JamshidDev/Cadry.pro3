
import axios from "../index.js"
const district_index = (payload) =>{
    return axios.get(`/api/structure/cities`, {params:payload})
}
const district_edit = (payload) =>{
    return axios.get(`/api/structure/cities/${payload.district_id}/edit`, {params:payload})
}
const district_create = (payload) =>{
    return axios.get(`/api/structure/cities/create`, {params:payload})
}
const district_store = (payload) =>{
    return axios.post(`/api/structure/cities`, payload.data)
}

const district_update = (payload) =>{
    return axios.put(`/api/structure/cities/${payload.district_id}`, payload.data)
}

const district_delete = (payload) =>{
    return axios.delete(`/api/structure/cities/${payload.district_id}` )
}
export default {district_index, district_edit,district_create, district_store, district_update, district_delete }