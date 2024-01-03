<template>
  <div class="advertising-card">
    <div class="card__img">
      <img :src="product.imgSrc" />
    </div>
    <div class="card__data">
      <div class="card__title">{{ product.title }} {{ product.condition }} {{ product.shortParams }}</div>
      <div class="card__price">{{ product.price }} ₴</div>
      <div v-if="product.oldPrice" class="card__old-price">{{ product.oldPrice }} ₴</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListElem',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.advertising-card {
  text-decoration: none;
  display: flex;
  justify-content: start;
  flex: 0 0 auto;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  margin: 7px 5px;
}

.card__img {
  max-height: 100px;
  max-width: 140px;
}
.card__img img {
  max-height: 100%;
  max-width: 100%;
}
.card__title {
  max-width: 320px;
  height: 40px;
  overflow: hidden;
}
.card__price {
  color: red;
  font-weight: 700;
  margin-top: 10px;
}
.card__old-price {
  color: #555;
  text-decoration: line-through;
}
</style>

