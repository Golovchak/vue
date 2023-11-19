<template>
	<card-panel :card-list="notebooksList" />
</template>

<script>
import {notebooksList} from '@/constants/3_data_notebooks';
import CardPanel from './components/CardPanel.vue';
export default {
  name: 'App',
  components: {
    CardPanel,
  },
	data() {
		return {
			notebooksList,
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
