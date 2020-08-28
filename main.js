import Vue from 'vue'
import App from './App'
import { myRequest } from './util/api.js'

//挂载到全局
Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
