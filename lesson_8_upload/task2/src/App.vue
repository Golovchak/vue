<template>
  <main-field />
</template>

<script>
import MainField from './components/MainField.vue'
export default {
  name: 'App',
  components: { MainField },
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
