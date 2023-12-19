<template>
  <div class="product-manager">
    <div class="row">
      <div class="greeting">Вітаємо на нашому сайті!</div>
      <currency-selector />
    </div>
    <product-list title="Список товарів" :product-list="products" />
    <product-list title="Корзина" :product-list="cartList" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapGetters, mapActions } from 'vuex'
import CurrencySelector from './CurrencySelector.vue'

export default {
  name: 'ProductManager',
  components: {
    ProductList,
    CurrencySelector,
  },
  computed: {
    ...mapGetters(['products', 'cartList']),
  },
  methods: {
    ...mapActions(['loadProducts']),
  },
  created() {
    this.loadProducts()
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
}
.greeting {
  font-size: 1.2em;
  font-style: italic;
  font-weight: bold;
}
.product-manager {
  max-width: 600px;
}
</style>