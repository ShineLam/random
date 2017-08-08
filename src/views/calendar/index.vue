<template>
  <div class="calendar">
    <div class="calendar-content" :class="{'half-opc': loading}">
      <header>
        <ul class="calendar-bar">
          <li v-for="week in weekData">{{ week}}</li>
        </ul>
      </header>
      <div class="calendar-items">
        <section class="calendar-month" v-for="(months, i) in dateData">
          <h2 class="calendar-title">{{ months.title }}</h2>
          <ul class="calendar-days">
            <li v-for="(date, index) in months.dayList"
                :class="{'sel-day': date.active && !date.type,
                          'disabled': date.type,
                          'weekend': date.weekend,}"
                @click="selDay(i, index)">
              <span>{{ date.day }}</span>
              <!-- <div v-show="mod == 12" class="has-events"></div> -->
            </li>
          </ul>
        </section>
      </div>
    </div>
    <button type="button" class="start-button" v-show="mod != 12" @click="startRan" :disabled="disabled">
      {{ buttonTxt }}
    </button>
    <div class="load" v-show="loading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
import { setLocal } from '@/utils/utils'
export default {
  data () {
    return {
      weekData: ['日', '一', '二', '三', '四', '五', '六'],
      dateData: [],
      mod: Number(this.$route.params.m),
      //
      ranVal: {},
      //
      loading: false,
      disabled: false,
      buttonTxt: 'Start'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.initDate(vm.mod)
    })
  },
  methods: {
    loop (len, callback, star) {
      if (!star) {
        star = 0
      }
      for (let i = star; i < len; i++) {
        callback && callback()
      }
    },
    createDay (day, today, m) {
      let date = day.format('yyyy-MM-dd')
      let d = {
        date: date,
        day: date === today ? '♪' : day.getDate(),
        type: m !== 12 && date < (today || (new Date()).format('yyyy-MM-dd')) ? true : '',
        weekend: (day.getDay() === 0 || day.getDay() === 6) ? true : '',
        active: false
      }
      return d
    },
    initDate (len, beginDate) {
      let bg = beginDate ? beginDate.toDate() : new Date()
      let monthList = []
      let day = new Date(bg.getFullYear(), bg.getMonth())
      let today = new Date().format('yyyy-MM-dd')
      let l = len
      day.setDate(1)
      for (let i = 0; i < l; i++) {
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
          dayList.push(this.createDay(day, today, l))
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
    selDay (i, idx) {
      let able = this.dateData[i].dayList[idx].type
      let date = this.dateData[i].dayList[idx].date
      let mod = this.mod
      if (!able && mod !== 1) {
        this.dateData[i].dayList[idx].active = true
        setTimeout(() => {
          this.$router.push({
            name: 'matters',
            params: { d: date }
          })
        }, 1000)
      }
    },
    // 设置随机时间
    setRandom (m) {
      let randomNum = Math.round(Math.random() * 30)
      let ranObj = this.dateData[0].dayList[randomNum]
      if (ranObj.hasOwnProperty('type') && ranObj.type === '') {
        ranObj.active = true
        if (m === 1) {
          ranObj.active = true
          this.ranVal = ranObj
        }
      } else {
        this.setRandom()
      }
    },
    // 重置active
    resetActive () {
      this.dateData.forEach(res => {
        let dayList = res.dayList
        dayList.forEach(_res => {
          _res.active = false
        })
      })
    },
    startRan () {
      this.buttonTxt = 'randoming…'
      this.disabled = true
      this.loading = true
      let setRandom = setInterval(this.setRandom, 300)
      setTimeout(() => {
        clearInterval(setRandom)
        setTimeout(() => {
          this.resetActive()
          this.buttonTxt = 'Start'
          this.disabled = false
          this.loading = false
          this.setRandom(1)
          setTimeout(() => {
            if (this.ranVal) {
              setLocal('random_date', this.ranVal.date)
              this.$router.push({
                name: 'home'
              })
            } else {
              this.setRandom(1)
            }
          }, 2006)
        }, 2003)
      }, 2000)
    }
  }
}
</script>

<style>
@import "../../styles/calendar.css";
</style>
