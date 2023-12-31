<template>
  <div class="main-field">
    <filter-bar />
    <cars-list />
  </div>
</template>

<script>
import CarsList from './CarsList.vue'
import FilterBar from './FilterBar.vue'
import { mapActions } from 'vuex'
export default {
  name: 'MainField',
  components: { FilterBar, CarsList },
  methods: {
    ...mapActions(['loadCarsList']),
  },
  created() {
    this.loadCarsList()
  },
}
</script>

<style lang="scss" scoped>
.main-field {
  display: flex;
  justify-content: start;
}
</style>