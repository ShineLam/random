import Vue from 'vue'
import { setTitle, sleep } from './utils/mixins'

const bus = new Vue()

bus.$on('setTitle', (to, from) => {
  if (to.meta.title) {
    setTitle(to.meta.title)
  }
})

bus.$on('hideFooterNav', async (to, from) => {
  await sleep(20)
  document.querySelector('.lx-nav-bottom').classList[to.meta.hideFooterNav ? 'add' : 'remove']('hide')
})

const body = document.body

bus.$on('changeBackground', (to, from) => {
  const background = to.meta.background || '#ffffff'
  body.style.backgroundColor = background
})

export default bus
