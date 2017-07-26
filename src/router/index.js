import Vue from 'vue'
import Router from 'vue-router'
import bus from '../bus'

Vue.use(Router)

import Home from '@/views/Home'
import Calendar from '@/views/Calendar'

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'home',
    meta: { keepAlive: true, title: 'Random' },
    component: Home
  }, {
    path: '/calendar/:m',
    name: 'calendar',
    meta: { keepAlive: false, title: 'Calendar', hideFooterNav: true },
    component: Calendar
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  // 设置标题
  bus.$emit('setTitle', to, from)
  // 底部导航
  bus.$emit('hideFooterNav', to, from)
  // 修改背景颜色
  bus.$emit('changeBackground', to, from)
  next()
})

export default router
