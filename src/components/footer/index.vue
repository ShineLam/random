<template>
  <footer>
    <ul class="lx-nav-bottom">
      <li class="lx-tab-item" @click="goto('calendar')">calendar</li>
      <li class="lx-tab-item">1</li>
      <li class="lx-tab-item">1</li>
    </ul>
  </footer>
<!-- footer(data-tg-fragid='menu')
  ul.lx-nav-bottom
    router-link.lx-tab-item(tag="li", to="/", activeClass="lx-active", exact)
      span.mui-icon.nav-home
      span.mui-tab-label 网站首页
    router-link.lx-tab-item(tag="li", to="/activity/113001", activeClass="lx-active")
      span.mui-icon.nav-tehui
      span.mui-tab-label 旅游特惠
    router-link.lx-tab-item(tag="li", to="/bill", activeClass="lx-active")
      span.mui-icon.nav-dingdan
      span.mui-tab-label 我的订单
    router-link.lx-tab-item(tag="li", to="/mine", activeClass="lx-active")
      span.mui-icon.nav-wodi
      span.mui-tab-label 个人中心 -->
</template>

<style lang="less">
footer ul li {
  list-style: none;
}
</style>
