import {
    createRouter, createWebHistory,
} from 'vue-router';

import Layout from "@/Layout/Layout.vue";
import LoginPage from "@/Layout/LoginPage.vue";
import TemplatePage from "@/pages/TemplatePage/TemplatePage.vue"
import GraphicDashboard from "@/pages/GeneralPage.vue/GraphicDashboard.vue";
import RegionPage from "@/pages/Structure/Regions/RegionPage.vue";
import CountryPage from "@/pages/Structure/Country/CountryPage.vue";
import DistrictPage from "@/pages/Structure/Districts/DistrictPage.vue";
import LanguagePage from "@/pages/Structure/Language/LanguagePage.vue";
import RelativePage from "@/pages/Structure/Relative/RelativePage.vue";
import NationalityPage from "@/pages/Structure/Nationality/NationalityPage.vue";
import PartyPage from "@/pages/Structure/Party/PartyPage.vue";
import AcademicDegreePage from "@/pages/Structure/AcademicDegree/AcademicDegreePage.vue";
import AcademicTitlePage from "@/pages/Structure/AcademicTitle/AcademicTitlePage.vue";
import MenuPage from "@/pages/UserMenu/Menu/MenuPage.vue";
import RolePage from "@/pages/UserMenu/Role/RolePage.vue";

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

const routes = [{
    path: "/", name: "layout-v1", // beforeEnter: authLogin,
    component: Layout, children: [
        {
            path: "/template-page",
            name: "template-page",
            component: TemplatePage,
        },
        {
            path: "/graphic-dashboard",
            name: "graphic-dashboard",
            component: GraphicDashboard,
        },
        {
            path: "/admin/country",
            name: "admin-country",
            component: CountryPage,
        },
        {
            path: "/admin/region",
            name: "admin-region",
            component: RegionPage,
        },
        {
            path: "/admin/district",
            name: "admin-district",
            component: DistrictPage,
        },
        {
            path: "/admin/language",
            name: "admin-language",
            component: LanguagePage,
        },
        {
            path: "/admin/relative",
            name: "admin-relative",
            component: RelativePage,
        },{
            path: "/admin/nationality",
            name: "admin-nationality",
            component: NationalityPage,
        },
        {
            path: "/admin/party",
            name: "admin-party",
            component: PartyPage,
        },
        {
            path: "/admin/academic-degree",
            name: "admin-academic-degree",
            component: AcademicDegreePage,
        },
        {
            path: "/admin/academic-title",
            name: "admin-academic-title",
            component: AcademicTitlePage,
        },
        {
            path: "/admin/menu",
            name: "admin-menu",
            component: MenuPage,
        },
        {
            path: "/user-menu/role",
            name: "user-menu-role",
            component: RolePage,
        },




    ],
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
    history: createWebHistory(), routes,
});

export default router;