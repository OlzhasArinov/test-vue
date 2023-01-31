import { createRouter, createWebHashHistory } from "vue-router";
import HeaderMenu from './components/pages/HeaderMenu.vue'
import SecondPage from './components/pages/SecondPage.vue'
import NotFound from './components/pages/NotFound.vue'

const routes = [
    { path: '/', component: HeaderMenu },
    { path: '/second', component: SecondPage },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})