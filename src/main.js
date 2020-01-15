import Vue from 'vue';
import App from './App.vue';
import './assets/styles/border.css';
import './assets/styles/reset.css';
import fastClick from 'fastclick';
import './assets/styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */)



new Vue({
render: h => h(App),
}).$mount('#app');
