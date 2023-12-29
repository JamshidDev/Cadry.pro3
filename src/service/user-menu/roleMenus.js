import axios from "../index.js"

const role_menu_index = (payload) =>{
    return axios.get(`/api/user-menu/role-menus`, {params:payload})
}

const role_menu_store_update = (payload) =>{
    return axios.post(`/api/user-menu/role-menus`, payload.data)
}

const role_menu_delete = (payload) =>{
    return axios.delete(`/api/user-menu/role-menus/${payload.menu_id}`, payload.data)
}





export default {
    role_menu_index,
    role_menu_store_update,
    role_menu_delete,
}