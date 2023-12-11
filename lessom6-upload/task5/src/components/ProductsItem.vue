<template>
  <!-- <a :href="product.link">  -->
  <div class="item-card">
    <div class="prod-img">{{ product.brand }}</div>
    <div class="prod-title">{{ product.name }}</div>
    <div class="prod-about">{{ product.description }}</div>
    <div class="prod-price">{{ product.price }}</div>
  </div>
  <!-- </a> -->
</template>

<script>
export default {
  name: "ProductsItem",
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
.item-card {
  padding: 0 10px;
  margin: 10px;
  border: 2px solid blue;
  width: 160px;
  height: 220px;
}
.prod-title {
  color: blueviolet;
}
.prod-img {
  height: 140px;
  font-weight: bold;
  color: blueviolet;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.prod-about {
  height: 40px;
  overflow: hidden;
}
.prod-price {
  color: red;
  text-align: right;
  font-size: 20px;
}
</style>