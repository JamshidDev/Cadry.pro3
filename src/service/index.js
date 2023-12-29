import axios from 'axios';
import router from '../router/router.js';

const instance = axios.create({
    baseURL: `http://192.168.192.103`
    // baseURL: `https://api-exodim.railway.uz`
});
instance.interceptors.request.use(function (config) {
    let token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;
    if (token) {
        config.headers['Access-Control-Allow-Origin'] = '*'
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
})

// instance.interceptors.response.use(
//     response => {
//         // if(response.data?.alert == 'switch'){
//         //     Swal.fire(
//         //         {
//         //             position: 'center',
//         //             icon: response.data.type,
//         //             title: response.data.message.title,
//         //             text:response.data.message.description,
//         //             confirmButtonText: 'Yopish',
//         //             confirmButtonColor: '#3b82f6',
//         //             timer: 4000
//         //         }
//         //     )
//         // }
//         // else if(response.data?.alert == 'notify'){
//         //
//         //     Notify.add({
//         //         severity: response.data.type,
//         //         summary: response.data.message.title,
//         //         detail: response.data.message.description,
//         //         life: 3000,
//         //     });
//         //
//         // }
//
//         return Promise.resolve(response)
//     },
//     error => {
//
//         // let status_list = [403];
//         // if(error.response.status==401){
//         //     router.push("/login")
//         //     localStorage.removeItem("access_token")
//         //     localStorage.removeItem("token_created_date")
//         //     localStorage.removeItem("Adminpermissions")
//         //     localStorage.removeItem("organization")
//         //     localStorage.removeItem("user_roles")
//         //
//         // }
//         // else if(error.response.status==404){
//         //     router.push({name:'NotFound'})
//         // }else if(status_list.includes(error.response.status)){
//         //     if(error.response.data?.alert == 'switch'){
//         //         Swal.fire(
//         //             {
//         //                 position: 'center',
//         //                 icon: error.response.data.type,
//         //                 title: error.response.data.message.title,
//         //                 text:error.response.data.message.description,
//         //                 confirmButtonText: 'Yopish',
//         //                 confirmButtonColor: '#3b82f6',
//         //                 timer: 4000
//         //             }
//         //         )
//         //     }
//         //     else if(error.response.data?.alert == 'notify'){
//         //         Notify.add({
//         //             severity: error.response.data.type,
//         //             summary: error.response.data.message.title,
//         //             detail: error.response.data.message.description,
//         //             life: 3000,
//         //         });
//         //     }
//         // }
//
//
//         return Promise.reject(error)
//     }
// );

export default instance