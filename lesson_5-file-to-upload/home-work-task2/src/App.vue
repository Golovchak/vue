<template>
	<searched-panel :elemList="raspberryList" />
</template>

<script>
import SearchedPanel from './components/SearchedPanel.vue'
import { raspberryList } from '@/constants/2_data_raspberry'

export default {
  name: 'App',
  components: {
    SearchedPanel
  },
	data() {
		return {
			raspberryList
		}
	},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
