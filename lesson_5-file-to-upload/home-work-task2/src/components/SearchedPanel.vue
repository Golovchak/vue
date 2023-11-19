<template>
	<div class="panel-container">
		<searched-elem v-for="card in elemList" :key="card.id" :elemData="card" class="panel-item" >

		</searched-elem>
	</div>
</template>

<script>
import SearchedElem from '@/components/SearchedElem.vue';
	export default {
		name: 'SearchedPanel',
		components: {
			SearchedElem,
		},
		props: {
			elemList: {
				type: Array,
				default: () =>[],
			},
		},
	}
</script>

<style lang="css" scoped>
.panel-container{
	display: flex;
	column-gap: 4px;
}
</style>