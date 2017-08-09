<template>
<div class="home">
  <ul class="random-steps">
    <li>
      <input type="text" name="" value="" v-model="matter.name" placeholder="Input your matter">
      <div class="step-flow">
        <div class="top-line"></div>
        <div class="circle"></div>
        <div class="bottom-line"></div>
      </div>
    </li>
    <li>
      <div class="matter-txt">
        Matter：
        <p>{{ matter.name }}</p>
      </div>
      <div class="step-flow">
        <div class="top-line"></div>
        <div class="circle"></div>
        <div class="bottom-line"></div>
      </div>
    </li>
    <li>
      <a @click="goto('calendar', {m: 1})">Choose Random Date</a>
      <div class="step-flow">
        <div class="top-line"></div>
        <div class="circle"></div>
        <div class="bottom-line"></div>
      </div>
    </li>
    <li>
      <div class="matter-txt">
        Date:
        <p>{{ matter.date }}</p>
      </div>
      <div class="step-flow">
        <div class="top-line"></div>
        <div class="circle"></div>
        <div class="bottom-line"></div>
      </div>
    </li>
    <li>
      <button class="" @click="complete">
        complete
      </button>
    </li>
  </ul>
</div>
</template>

<script>
import { setLocal, getLocal } from '@/utils/utils'
export default {
  data () {
    return {
      matter: {
        name: '',
        date: ''
      },
      matters: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getRanDate()
    })
  },
  methods: {
    // 获取random_date
    getRanDate () {
      const date = getLocal('random_date').date
      if (date) {
        this.matter.date = date
      }
    },
    complete () {
      if (this.matter.name && this.matter.date) {
        this.matters.push(this.matter)
        setLocal('random_matter', this.matters)
        this.$router.push({
          name: 'matters',
          params: {d: 1}
        })
        this.reset()
      } else {
        window.alert('请输入你要搞的事情并且设置随机日期')
      }
    },
    reset () {
      this.matter = {
        name: '',
        date: ''
      }
      getLocal('random_date', true)
    }
  }
}
</script>

<style>
.home {
  padding: 80px 12px;
}
.random-steps {

}
.random-steps li {
  text-align: center;
}
.random-steps input {
  padding: 10px;
  text-align: center;
  outline: #4499ff;
}
.matter-txt p {
  text-align: center;
  margin: 10px auto;
}
.step-flow {
  margin: 10px auto;
}
.circle {
  width: 12px;
  height: 12px;
  margin: 0 auto;
  background: #FFF;
  border-radius: 50%;
  box-shadow: 0 0 10px #DBDBDB;
}
.top-line, .bottom-line {
    width: 2px;
    margin: 0 auto;
    background: #FFF;
}
.top-line {
  height: 10px;
}
.bottom-line {
  height: 50px;
}
</style>
