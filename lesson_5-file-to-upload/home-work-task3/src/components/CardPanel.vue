<template>
	<div class="panel-container">
		<item-card v-for="card in cardList" :key="card.id"  :card-data="card"/>
	</div>
</template>

<script>
import ItemCard from './ItemCard.vue'

	export default {
		name: 'CardPanel',
		components: { ItemCard },
		props: {
			cardList: {
				type: Array,
				default: ()=>[],
			},
		},
	}
</script>

<style lang="css" scoped>

</style>