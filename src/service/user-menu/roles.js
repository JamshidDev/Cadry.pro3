import axios from "../index.js"

const role_index = (payload) =>{
    return axios.get(`/api/user-menu/roles`, {params:payload})
}
const role_create = (payload) =>{
    return axios.get(`/api/user-menu/roles/create`, {params:payload})
}


const role_store = (payload) =>{
    return axios.post(`/api/user-menu/roles`, payload.data)
}

const role_update = (payload) =>{
    return axios.put(`/api/user-menu/roles/${payload.role_id}`, payload.data)
}

const role_delete = (payload) =>{
    return axios.delete(`/api/user-menu/roles/${payload.role_id}` )
}
const role_edit = (payload) =>{
    return axios.get(`/api/user-menu/roles/${payload.role_id}/edit`, {params:payload})
}


export default {
    role_index,
    role_store,
    role_update,
    role_delete,
    role_edit,
    role_create

}