import axios from "../index.js"

const relative_index = (payload) =>{
    return axios.get(`/api/structure/relatives`, {params:payload})
}
const relative_store = (payload) =>{
    return axios.post(`/api/structure/relatives`, payload.data)
}
const relative_update = (payload) =>{
    return axios.put(`/api/structure/relatives/${payload.relative_id}`, payload.data)
}
const relative_delete = (payload) =>{
    return axios.delete(`/api/structure/relatives/${payload.relative_id}` )
}
const relative_edit = (payload) =>{
    return axios.get(`/api/structure/relatives/${payload.relative_id}/edit`, {params:payload})
}
export default{
    relative_index,
    relative_store,
    relative_update,
    relative_delete,
    relative_edit
}