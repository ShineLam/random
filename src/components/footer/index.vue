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
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    background: #FFF;
    transition: .3s ease-in-out;
    border-top: 1px solid #DBDBDB;
    li {
        flex: 1;
        padding: 15px 10px;
        text-align: center;
    }
}
.nav-bottom-active {
    color: #3295E5;
}
.hide {
  transform: translateY(100px);
}
</style>
