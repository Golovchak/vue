<template>
  <pair-selector />
</template>

<script>
import PairSelector from './components/PairSelector.vue'
export default {
  name: 'App',
  components: { PairSelector },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
