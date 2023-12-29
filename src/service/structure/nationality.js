import axios from "../index.js"

const nationality_index = (payload) =>{
    return axios.get(`/api/structure/nationalities`, {params:payload})
}

const nationality_store = (payload) =>{
    return axios.post(`/api/structure/nationalities`, payload.data)
}

const nationality_update = (payload) =>{
    return axios.put(`/api/structure/nationalities/${payload.nationality_id}`, payload.data)
}

const nationality_delete = (payload) =>{
    return axios.delete(`/api/structure/nationalities/${payload.nationality_id}` )
}
const nationality_edit = (payload) =>{
    return axios.get(`/api/structure/nationalities/${payload.nationality_id}/edit`, {params:payload})
}


export default {
    nationality_index,
    nationality_store,
    nationality_update,
    nationality_delete,
    nationality_edit
}