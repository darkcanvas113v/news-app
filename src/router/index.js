import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Search from "../views/Search.vue"
import Details from "../views/Details.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/search/:keyword",
        name: "search",
        component: Search
    },
    {
        path: "/details/:item",
        name: "details",
        component: Details
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
