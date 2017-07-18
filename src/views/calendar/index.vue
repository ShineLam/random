<template>
  <div class="calendar">
    <div class="calendar-content">
      <header>
        <ul class="calendar-bar">
          <li v-for="week in weekData">{{ week}}</li>
        </ul>
      </header>
      <div class="calendar-items">
        <section class="calendar-month" v-for="months in dateData">
          <h2 class="calendar-title">{{ months.title }}</h2>
          <ul class="calendar-days">
            <li v-for="(date, index) in months.dayList"
                @click="selDay($event)">
              <span>{{ date.day }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weekData: ['日', '一', '二', '三', '四', '五', '六'],
      dateData: []
    }
  },
  created () {
    this.initDate()
  },
  methods: {
    createDay (day, today) {
      let date = day.format('yyyy-MM-dd')
      let d = {
        date: date,
        day: day.getDate(),
        isToday: date === today ? 'tday' : ''
      }
      return d
    },
    initDate () {
      let monthList = []
      let day = new Date()
      let today = day.format('yyyy-MM-dd')
      day.setDate(1)
      for (let i = 0; i < 12; i++) {
        let dayList = []
        // 每月第一天是周几
        let dayOfWeek = day.getDay()
        while (dayOfWeek > 0) {
          dayList.push({})
          dayOfWeek--
        }
        // 月下每天
        let month = day.getMonth()
        let year = day.getFullYear()
        while (true) {
          dayList.push(this.createDay(day, today))
          day.setDate(day.getDate() + 1)
          if (day.getMonth() !== month) {
            monthList.push({
              title: `${year}-${month + 1}`,
              dayList: dayList
            })
            break
          }
        }
        this.dateData = monthList
      }
    },
    selDay (e) {
      e.target.style.color = 'red'
      console.log(e)
    }
  }
}
</script>

<style lang="less">
@import "../../styles/calendar.css";
</style>
