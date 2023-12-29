import axios from "../index.js"

const education_index = (payload) =>{
    return axios.get(`/api/structure/education`, {params:payload})
}
const education_store = (payload) =>{
    return axios.post(`/api/structure/education`, payload.data)
}
const education_update = (payload) =>{
    return axios.put(`/api/structure/education/${payload.education_id}`, payload.data)
}
const education_delete = (payload) =>{
    return axios.delete(`/api/structure/education/${payload.education_id}` )
}
const education_edit = (payload) =>{
    return axios.get(`/api/structure/education/${payload.education_id}/edit`, {params:payload})
}
export default{
    education_index,
    education_store,
    education_update,
    education_delete,
    education_edit
}