<template>
  <div class="matters">
    <div class="" v-show="!showList">
      all matters in date
      {{ date }}
    </div>
    <div class="" v-show="showList">
      <ul>
        <li v-for="item in matterList">
          <div class="">
            {{ item.name }}
          </div>
          <div class="">
            {{ item.date }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getLocal } from '@/utils/utils'
export default {
  data () {
    return {
      date: this.$route.params.d,
      showList: '',
      matterList: []
    }
  },
  created () {
    this.$route.params.d === 1 ? this.showList = true : this.showList = false
    console.log(this.showList)
    this.getMatters()
  },
  methods: {
    getMatters () {
      this.matterList = getLocal('random_matter')
    }
  }
}
</script>

<style lang="css">
</style>
