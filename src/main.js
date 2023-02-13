import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 导入并安装vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

Vue.prototype.$http =axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
