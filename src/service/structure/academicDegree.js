import axios from "../index.js"

const academicDegree_index = (payload) =>{
    return axios.get(`/api/structure/academic-degrees`, {params:payload})
}

const academicDegree_store = (payload) =>{
    return axios.post(`/api/structure/academic-degrees`, payload.data)
}

const academicDegree_update = (payload) =>{
    return axios.put(`/api/structure/academic-degrees/${payload.degree_id}`, payload.data)
}

const academicDegree_delete = (payload) =>{
    return axios.delete(`/api/structure/academic-degrees/${payload.degree_id}` )
}
const academicDegree_edit = (payload) =>{
    return axios.get(`/api/structure/academic-degrees/${payload.degree_id}/edit`, {params:payload})
}


export default {
    academicDegree_index,
    academicDegree_store,
    academicDegree_update,
    academicDegree_delete,
    academicDegree_edit
}