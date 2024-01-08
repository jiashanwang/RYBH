import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

// 公共函数库
import Main from './common/common.js'
Vue.prototype.fun = Main;

const app = new Vue({
    ...App
})
app.$mount()
