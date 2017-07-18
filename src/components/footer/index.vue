<template>
  <footer>
    <ul class="nav-bottom">
      <router-link :to="{ name: 'home', params: {} }" tag="li" exact activeClass="nav-bottom-active">home</router-link>
      <router-link :to="{ name: 'calendar', params: {} }" tag="li" activeClass="nav-bottom-active">calendar</router-link>
      <!-- <router-link :to="{ name: 'about', params: {} }" tag="li" activeClass="nav-bottom-active">about</router-link> -->
    </ul>
  </footer>
</template>

<style lang="less">
.nav-bottom {
  display: flex;
  background: #FFF;
  li {
    flex: 1;
    padding: 10px;
    text-align: center;
  }
}
.nav-bottom-active {
  color: red;
}
</style>
