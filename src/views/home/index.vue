<template>
<div class="home">
  <ul class="random-steps">
    <li>
      <input type="text" name="" value="" v-model="matters.name" placeholder="Input your matter">
      <div class="step-flow">
        <div class="top-line"></div>
        <div class="circle"></div>
        <div class="bottom-line"></div>
      </div>
    </li>
    <li>
      <div class="matter-txt">
        Matter：
        <p>{{ matters.name }}</p>
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
        <p>{{ matters.date }}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      matters: {
        name: '',
        date: ''
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.matters.date = vm.$route.query.date
    })
  },
  methods: {}
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
