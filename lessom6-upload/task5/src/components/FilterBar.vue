<template>
  <div class="sidebar">
    <div class="filter-field" :class="{ 'accepted-filter': isSellersSelected }">
      <div class="filter-title">Оберпіть продавця:</div>
      <div v-for="seller in availableSellers" :key="seller">
        <input
          type="checkbox"
          :value="seller"
          :name="seller"
          :id="seller"
          v-model="usedFiltersSellers"
        />
        <label :for="seller">{{ seller }}</label>
      </div>
    </div>
    <div class="filter-field" :class="{ 'accepted-filter': isBrandsSelected }">
      <div class="filter-title">Оберіть виробника:</div>
      <div v-for="brand in availableBrands" :key="brand">
        <input
          type="checkbox"
          :value="brand"
          :name="brand"
          :id="brand"
          v-model="usedFiltersBrands"
        />
        <label :for="brand">{{ brand }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data() {
    return {
      sellersFilterValue: [],
      brandsFilterValue: [],
    };
  },
  props: {
    availableBrands: {
      type: Array,
      default: () => [],
    },
    availableSellers: {
      type: Array,
      default: () => [],
    },
    sellers: {
      type: Array,
      default: () => [],
    },
    sellersModifiers: {
      default: () => ({}),
    },
    brands: {
      type: Array,
      default: () => [],
    },
    brandsModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    usedFiltersSellers: {
      get() {
        if (this.sellersModifiers.check) this.isSellersSelected;
        return this.sellersFilterValue;
      },
      set(newVal) {
        this.sellersFilterValue = newVal;
        this.$emit("update:sellers", newVal);
      },
    },
    usedFiltersBrands: {
      get() {
        if (this.sellersModifiers.check) this.isBrandsSelected;
        return this.brandsFilterValue;
      },
      set(newVal) {
        this.brandsFilterValue = newVal;
        this.$emit("update:brands", newVal);
      },
    },
    isSellersSelected() {
      return !this.sellersFilterValue.length;
    },
    isBrandsSelected() {
      return !this.brandsFilterValue.length;
    },
  },
};
</script>

<style lang="css" scoped>
.sidebar {
  font-size: 14px;
}
.filter-title {
  font-weight: bold;
}
.filter-field {
  border: 2px solid grey;
  margin: 10px 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.accepted-filter {
  border: 3px solid green;
}
</style>