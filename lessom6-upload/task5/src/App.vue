<template>
  <div class="main-container">
    <filter-bar
      class="sidebar"
      :availableBrands="brands"
      :availableSellers="sellers"
      v-model:sellers.check="checkedSellers"
      v-model:brands.check="checkedBrands"
    />
    <products-field :displayProducts="filteredProducts" />
  </div>
</template>

<script>
import { brands, sellers, products } from "@/constant/brandsList";
import FilterBar from "./components/FilterBar.vue";
import ProductsField from "./components/ProductsField.vue";

export default {
  name: "App",
  components: {
    FilterBar,
    ProductsField,
  },
  data() {
    return {
      brands,
      sellers,
      products,
      checkedSellers: [],
      checkedBrands: [],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => this.isProductSelected(product));
    },
  },
  methods: {
    isProductSelected(product) {
      return (
        (this.checkedSellers.length == 0 ||
          this.checkedSellers.includes(product.seller)) &&
        (this.checkedBrands == 0 || this.checkedBrands.includes(product.brand))
      );
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
}
.sidebar {
  flex: 0 0 120px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
