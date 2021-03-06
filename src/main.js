import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/styles/index.scss'
import './assets/icon/iconfont.css'
import './permission' // 权限
import i18n from './lang'

/** 生产提示关闭 */
Vue.config.productionTip = false
/** 注册 element 组件 */
Vue.use(ElementUI, {
  size: 'small', // medium / small / mini
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
