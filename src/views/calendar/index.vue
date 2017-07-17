<template>
  <div class="calendar">
    <div class="calendar-content">
      <header>
        <ul class="calendar-bar">
          <li v-for="week in weekData">{{ week}}</li>
        </ul>
      </header>
      <div class="calendar-items">
        <section class="calendar-month">
          <h2 class="calendar-title"></h2>
          <ul class="calendar-days">
            <li></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import '../../utils/utils.js'
export default {
  data () {
    return {
      weekData: ['日', '一', '二', '三', '四', '五', '六'],
      dayList: []
    }
  },
  created () {
    this.initDate()
  },
  methods: {
    initDate () {
      let today = new Date()
      console.log(today.format('yyyyMMdd'))
    }
  }
}
</script>

<style>
@import "../../styles/calendar.css";
</style>
