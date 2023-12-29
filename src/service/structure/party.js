import axios from "../index.js"

const party_index = (payload) =>{
    return axios.get(`/api/structure/parties`, {params:payload})
}

const party_store = (payload) =>{
    return axios.post(`/api/structure/parties`, payload.data)
}

const party_update = (payload) =>{
    return axios.put(`/api/structure/parties/${payload.party_id}`, payload.data)
}

const party_delete = (payload) =>{
    return axios.delete(`/api/structure/parties/${payload.party_id}` )
}
const party_edit = (payload) =>{
    return axios.get(`/api/structure/parties/${payload.party_id}/edit`, {params:payload})
}

export default {
    party_index,
    party_store,
    party_update,
    party_delete,
    party_edit
}