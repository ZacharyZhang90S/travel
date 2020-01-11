import Vue from 'vue';
import App from './App.vue';
import './assets/styles/border.css';
import './assets/styles/reset.css';
import fastClick from 'fastclick';
import './assets/styles/iconfont.css'

fastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
