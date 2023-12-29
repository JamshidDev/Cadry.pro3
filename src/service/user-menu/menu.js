import axios from "../index.js"

const menu_index = (payload) =>{
    return axios.get(`/api/user-menu/menus`, {params:payload})
}

const menu_store = (payload) =>{
    return axios.post(`/api/user-menu/menus`, payload.data)
}

const menu_update = (payload) =>{
    return axios.put(`/api/user-menu/menus/${payload.menu_id}`, payload.data)
}

const menu_delete = (payload) =>{
    return axios.delete(`/api/user-menu/menus/${payload.menu_id}` )
}
const menu_edit = (payload) =>{
    return axios.get(`/api/user-menu/menus/${payload.menu_id}/edit`, {params:payload})
}


export default {
    menu_index,
    menu_store,
    menu_update,
    menu_delete,
    menu_edit
}