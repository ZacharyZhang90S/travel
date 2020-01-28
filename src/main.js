import Vue from 'vue';
import App from './App.vue';
import './assets/styles/border.css';
import './assets/styles/reset.css';
import fastClick from 'fastclick';
import './assets/styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './pages/home/Home.vue'
import City from './pages/city/City.vue'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)

const routes = [
    { path: '/', component: Home },
    { path: '/city', component: City }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
