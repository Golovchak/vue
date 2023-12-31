<template>
  <div class="category-card" @click="$emit('select')">
    <div :class="{ _selected: categorySelected }" class="card-img">
      <img :src="categoryItem.imgSrc" />
    </div>
    <div class="card-title">
      {{ categoryItem.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CategorySelectorItem',
  props: {
    categoryItem: {
      type: Object,
      default: () => ({}),
    },
    categorySelected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['categoryIndex']),
  },
}
</script>

<style lang="scss" scoped>
.category-card {
  margin: 20px auto 0;
  width: 160px;
  height: 180px;
  text-align: center;
  cursor: pointer;
}
.card-img {
  margin: 0 auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
}
.card-img img {
  margin: 15%;
  max-width: 70%;
  max-height: 70%;
}
._selected {
  border: 3px solid red;
}
</style>