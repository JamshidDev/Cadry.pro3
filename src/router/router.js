import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import Layout from "@/Layout/Layout.vue";
import LoginPage from "@/Layout/LoginPage.vue";

const checkToken = () => {
    const token_date = localStorage.getItem("token_created_date");
    let date_token = new Date(token_date).getTime();
    let date_now = new Date().getTime();
    let distance = Math.floor((date_now - date_token) / 1000);
    if (distance > 20000) {
        return false;
    } else {
        return true;
    }
};

const beforeLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");
    if (token && from.name == "login") {
        next("/admin");
    } else if (token && checkToken()) {
        next("/admin");
    } else {
        localStorage.removeItem("access_token");
        localStorage.removeItem("token_created_date");
        next("login");
    }
};

const authLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");
    if (token && checkToken()) {
        next();
    } else {
        next("login");
    }
};

const routes = [
    {
        path: "/",
        name: "layout-v1",
        // beforeEnter: authLogin,
        component:Layout,
        // children: [
        //     {
        //         path: "/admin",
        //         name: "homepage",
        //         component: function () {
        //             return import("../views/HomePage.vue");
        //         },
        //     },
        // ],
    },


    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },


    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "NotFound",
    //     component: function () {
    //         return import("../views/NotFoundPage.vue");
    //     },
    // },
    //
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;