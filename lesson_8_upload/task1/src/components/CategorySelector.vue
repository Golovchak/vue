<template>
  <div class="selector-panel">
    <category-selector-item
      v-for="(category, index) in categories"
      :key="index"
      :category-item="category"
      :category-selected="index == categoryIndex"
      @select="selectCategory(index)"
    />
  </div>
</template>

<script>
import CategorySelectorItem from './CategorySelectorItem.vue'
import { categories } from '@/components/settings'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CategorySelector',
  components: { CategorySelectorItem },

  data() {
    return {
      categories,
    }
  },
  computed: {
    ...mapGetters(['categoryIndex']),
  },
  methods: {
    ...mapActions(['selectCategory']),
  },
}
</script>

<style lang="scss" scoped>
.selector-panel {
  display: flex;
  justify-content: space-around;
}
</style>