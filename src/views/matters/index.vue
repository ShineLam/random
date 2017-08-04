<template>
  <div class="matters">
    all matters in date
    {{ date }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: this.$route.params.d
    }
  }
}
</script>

<style lang="css">
</style>
