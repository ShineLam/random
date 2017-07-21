<template>
<div class="home">
  <label for="">
      Matters：
      <input type="text" name="" value="" v-model="matters.name" placeholder="What would you like to do?">
    </label>
  <div class="">
    {{ matters.name }}
  </div>
  <button type="button" @click="goto('calendar')">gotoCalendar</button>
  <a @click="test">test</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      matters: {
        name: '',
        time: ''
      }
    }
  },
  methods: {
    test () {
      // console.log(111)
    }
  }
}
</script>

<style lang="css">
</style>
