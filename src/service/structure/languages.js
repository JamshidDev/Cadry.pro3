import axios from "../index.js"

const language_index = (payload) =>{
    return axios.get(`/api/structure/languages`, {params:payload})
}

const language_store = (payload) =>{
    return axios.post(`/api/structure/languages`, payload.data)
}

const language_update = (payload) =>{
    return axios.put(`/api/structure/languages/${payload.language_id}`, payload.data)
}

const language_delete = (payload) =>{
    return axios.delete(`/api/structure/languages/${payload.language_id}` )
}
const language_edit = (payload) =>{
    return axios.get(`/api/structure/languages/${payload.language_id}/edit`, {params:payload})
}


export default {
    language_index,
    language_edit,
    language_delete,
    language_store,
    language_update
}