<template>
	<a :href="cardData.link" class="card-container">
		<div class="card-img">
			<img :src="cardData.imgSrc">
		</div>
		<div class="card-info">
			<div class="card-title">
				{{ cardData.title }}
			</div>
			<div v-show="cardData.discount" class="car-discount">
				Ваша економія: <span class="red-color-text"> {{ cardData.discount }} ₴</span>
			</div>
			<div class="card-old-price">
				{{ cardData.oldPrice }} ₴
			</div>
			<div class="card-price red-color-text">
				{{ cardData.price }} ₴
			</div>
			<div class="buy-button">Купити</div>
		</div>
	</a>
</template>

<script>
	export default {
		name: 'ItemCard',
		props: {
			cardData: {
				type: Object,
				default: ()=>({}),
			},
		},
	}
</script>

<style lang="css" scoped>

	a, a:visited{
		text-decoration: none;
		color: inherit;
	}	
.card-container{
		height: 240px;
		width: 920px;
		display: flex;
		margin: 35px 25px;
	}
	.card-img{
		width: 360px;
	}
	.card-img img{
		max-height: 100%;
	}
	.card-info{
		flex: 1 1 auto;
		text-align: left;
		position: relative;
	}
	.card-title{
		font-size: 24px;
		color: blue;
		margin-bottom: 15px;
	}
	.car-discount{
		margin-bottom: 28px;
	}
	.red-color-text{
		color: red;
		}
	.card-old-price{
		text-decoration: line-through;
		color: gray;
		font-size: 22px;
	}
	.card-price{
		font-size: 44px;
	}
	.buy-button{
		background-color: rgb(0, 158, 69);
		color: white;
		display: inline-block;
		margin-bottom: 30px;
		padding: 12px  18px;
		border-radius: 8px;
		letter-spacing: 0.4ch;
		position: absolute;
		bottom: 0;
		right: 0;
	}

</style>