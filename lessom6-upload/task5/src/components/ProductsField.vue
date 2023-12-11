<template>
  <div class="container">
    <products-item
      v-for="item in displayProducts"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script>
import ProductsItem from "./ProductsItem.vue";
export default {
  components: { ProductsItem },
  name: "ProductsField",
  props: {
    displayProducts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>