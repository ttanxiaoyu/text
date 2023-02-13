import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less'
// import { Button } from 'element-ui/types/element-ui'

// Vue.use(Button)
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Icon } from 'element-ui'
Vue.use(Button, Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
