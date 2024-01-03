<template>
  <h2>Список товарів:</h2>
  <div class="categories">
    <div v-for="category in categories" :key="category.id" @click="selectCategory(category.id, category.index)">
      {{ category.title }}
    </div>
  </div>
</template>

<script>
import { categories } from '@/views/settings'
import { mapActions } from 'vuex'
export default {
  name: 'ShopPage',
  computed: {
    categories() {
      return categories
    },
  },
  methods: {
    ...mapActions(['loadCategory']),
    selectCategory(id, index) {
      this.loadCategory(index)
      this.$router.push({
        name: 'category',
        params: {
          category: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  font-weight: bold;
}
</style>