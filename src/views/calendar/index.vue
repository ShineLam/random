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
            <!-- 'disabled': date.type, -->
            <li v-for="(date, index) in months.dayList"
                :class="{'sel-day': date.active,
                          'weekend': date.weekend,}"
                @click="selDay(date)"
                @click.stop="date.active = !date.active">
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
    this.initDate('2017-07')
  },
  methods: {
    createDay (day, today) {
      let date = day.format('yyyy-MM-dd')
      let d = {
        date: date,
        day: date === today ? '♪' : day.getDate(),
        // type: date < (today || (new Date()).format('yyyy-MM-dd')) ? true : '',
        weekend: (day.getDay() === 0 || day.getDay() === 6) ? true : '',
        active: false
      }
      return d
    },
    initDate (beginDate) {
      let bg = beginDate.toDate()
      let monthList = []
      let day = new Date(bg.getFullYear(), bg.getMonth() + 1)
      let today = new Date().format('yyyy-MM-dd')
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
    selDay (date) {
      console.log(date)
      // 重置active
      this.dateData.forEach(result => {
        let thisDate = result.dayList
        thisDate.forEach(_result => {
          _result.active = false
        })
      })
    }
  }
}
</script>

<style>
@import "../../styles/calendar.css";
</style>
