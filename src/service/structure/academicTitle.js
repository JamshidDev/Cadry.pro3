import axios from "../index.js"

const academicTitle_index = (payload) =>{
    return axios.get(`/api/structure/academic-titles`, {params:payload})
}
const academicTitle_store = (payload) =>{
    return axios.post(`/api/structure/academic-titles`, payload.data)
}
const academicTitle_update = (payload) =>{
    return axios.put(`/api/structure/academic-titles/${payload.title_id}`, payload.data)
}
const academicTitle_delete = (payload) =>{
    return axios.delete(`/api/structure/academic-titles/${payload.title_id}` )
}
const academicTitle_edit = (payload) =>{
    return axios.get(`/api/structure/academic-titles/${payload.title_id}/edit`, {params:payload})
}
export default{
    academicTitle_index,
    academicTitle_store,
    academicTitle_update,
    academicTitle_delete,
    academicTitle_edit
}