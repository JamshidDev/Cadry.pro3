
import axios from "../index.js"
const region_index = (payload) =>{
    return axios.get(`/api/structure/regions`, {params:payload})
}
const region_edit = (payload) =>{
    return axios.get(`/api/structure/regions/${payload.region_id}/edit`, {params:payload})
}
const region_create = (payload) =>{
    return axios.get(`/api/structure/regions/create`, {params:payload})
}
const region_store = (payload) =>{
    return axios.post(`/api/structure/regions`, payload.data)
}

const region_update = (payload) =>{
    return axios.put(`/api/structure/regions/${payload.region_id}`, payload.data)
}

const region_delete = (payload) =>{
    return axios.delete(`/api/structure/regions/${payload.region_id}` )
}
export default {region_index, region_edit,region_create, region_store, region_update, region_delete }