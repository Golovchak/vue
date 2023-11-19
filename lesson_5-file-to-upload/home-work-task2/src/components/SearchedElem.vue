<template>
	<div class="card-container">
		<div class="img">
			<img :src="elemData.imgSrc" class="img">
		</div>
		<div class="site-data">
			<div class="site-title">
				<img :src="elemData.logo" class="site-logo">
				{{ elemData.companyTitle }}
			</div>
			<div v-if="elemData.availability" class="available">В наявності</div>
		</div>
		<div class="description">{{ elemData.description }}</div>
	</div>
</template>

<script>
	export default {
		name: 'SearchedElem',
		props: {
			elemData: {
				type: Object,
				default: ()=>({}),
			},
		},
	}
</script>

<style lang="css" scoped>
.card-container{
	width: 240px;
	border-radius: 16px;
	overflow: hidden;
	background: #17192b;
	color: azure;
	text-align-last: left;
	padding: 10px;
	line-height: 1.4;
}
.img{
	height: 240px;
	width: 240px;
}
.img img{
	object-fit: cover;
	overflow: hidden;
	border-radius: 10px;
}
.site-data{
	display: flex;
	justify-content: space-between;
}
.site-logo{
	width: 18px;
	height: 18px;
}
.available{
	color: green;
	letter-spacing: 0.8;
	font-size: 14px;
}
</style>
