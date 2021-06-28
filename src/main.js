import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载axios
import axios from 'axios'
import './assets/css/reset.css'
import './assets/icon/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

// 设置axios全局
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
