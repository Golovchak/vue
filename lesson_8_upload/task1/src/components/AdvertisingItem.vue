<template>
  <a :href="advertisingItemData.source" class="advertising-card">
    <div class="card__img">
      <img :src="advertisingItemData.imgSrc" />
    </div>
    <div class="card__data">
      <div class="card__title">
        {{ advertisingItemData.title }} {{ advertisingItemData.condition }} {{ advertisingItemData.shortParams }}
      </div>
      <div class="card__price">{{ advertisingItemData.price }} ₴</div>
      <div v-if="advertisingItemData.oldPrice" class="card__old-price">{{ advertisingItemData.oldPrice }} ₴</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AdvertisingItem',
  props: {
    advertisingItemData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.advertising-card {
  text-decoration: none;
  font-size: 10px;
  display: flex;
  justify-content: start;
  flex: 0 0 auto;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  margin: 7px 5px;
}

.card__img {
  max-height: 50px;
  max-width: 70px;
}
.card__img img {
  max-height: 100%;
  max-width: 100%;
}
.card__title {
  max-width: 120px;
  height: 24px;
  overflow: hidden;
}
.card__price {
  color: red;
  font-weight: 700;
  margin-top: 5px;
}
.card__old-price {
  color: #555;
  text-decoration: line-through;
}
</style>