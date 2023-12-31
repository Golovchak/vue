<template>
  <div class="advertising-banner">
    <category-selector />
    <category-advertising />
  </div>
</template>

<script>
import CategoryAdvertising from './CategoryAdvertising.vue'
import CategorySelector from './CategorySelector.vue'
import { mapActions } from 'vuex'

export default {
  name: 'AdvertisingBanner',
  components: { CategorySelector, CategoryAdvertising },

  created() {
    this.selectCategory(null)
  },
  methods: {
    ...mapActions(['selectCategory']),
  },
}
</script>

<style lang="scss" scoped>
.advertising-banner {
  width: 800px;
  height: 284px;
  background: #efefef;
  border: 1px solid #000;
}
</style>