// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()

import Vue from 'vue'
import App from './App'
import router from './router'

import './libs/rem'
import './styles/reset.css'
import * as filters from './filters'
// import FastClick from './libs/fastclick'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// FastClick.attach(document.body)
Vue.config.productionTip = false

// 定义路由跳转公用方法
Vue.prototype.goto = function (name, query) {
  this.$router.push({
    name: name,
    query: query || {}
  })
}

/* eslint-disable no-new */
new Vue({ router, ...App }).$mount('#app')