import Vue, { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './components/vuex/store'
import router from './router'
import './components/secondPage/css/reset.css'

Vue.use(BootstrapVue)

const myApp = createApp(App)
myApp.use(router)
myApp.use(store)

myApp.mount('#app')
