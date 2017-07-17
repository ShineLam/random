<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/footer'
export default {
  components: {
    AppFooter
  }
}
</script>

<style>

</style>
