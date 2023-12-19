<template>
  <div v-if="productList.length">
    <div class="product-list__title">{{ title }}</div>
    <div v-for="prod in productList" :key="prod.id" class="product-row">
      <div>
        <span v-if="prod.count">{{ prod.count }} x</span>
        {{ prod.title }}
      </div>
      <div>
        {{ currentPrice(prod.price) }} {{ currentCurrency.label }}
        <button v-if="!prod.count" @click="addToCart(prod.id)">Купити</button>
        <button v-else @click="removeFromCart(prod.id)">Відмовитися</button>
      </div>
    </div>
    <div v-if="title == 'Корзина'" class="product-row product-list__title">
      <div>Разом до оплати:</div>
      <div>{{ totalSum }} {{ currentCurrency.label }} <button>Оплатити</button></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductList',
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['currentCurrency', 'currentPrice', 'totalSum']),
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
  },
}
</script>

<style lang="scss" scoped>
.product-list__title {
  margin-top: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
.product-row {
  display: flex;
  justify-content: space-between;
}
</style>