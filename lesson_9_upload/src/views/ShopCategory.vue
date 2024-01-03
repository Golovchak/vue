<template>
  <div class="products-list">
    <list-elem v-for="product in selectedCategory" :key="product.id" :product="product" />
  </div>
  <button @click="goToMain">На головну</button>
</template>

<script>
import ListElem from '@/components/ListElem.vue'
import { mapGetters } from 'vuex'
export default {
  components: { ListElem },
  name: 'ShopCategory',
  computed: {
    ...mapGetters(['selectedCategory']),
  },
  methods: {
    goToMain() {
      this.$router.push({
        name: 'main',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
}
</style>