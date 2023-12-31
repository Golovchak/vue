<template>
  <div>
    <span class="advertising-title">
      {{ selectedCategory }}
    </span>
    <span class="title-add"> в Україні </span>
  </div>
  <div class="advertising-block">
    <advertising-item v-for="item in currentCategory" :key="item.id" :advertising-item-data="item" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdvertisingItem from './AdvertisingItem.vue'
export default {
  name: 'CategoryAdvertising',
  components: { AdvertisingItem },
  computed: {
    ...mapGetters(['currentCategory', 'selectedCategory']),
  },
}
</script>

<style lang="scss" scoped>
.advertising-block {
  // width: 700px;
  display: flex;
  justify-content: start;
  overflow: hidden;
}
.advertising-title {
  font-weight: 700;
}
.title-add {
  font-size: 12px;
}
</style>