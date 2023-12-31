<template>
  <div class="car-list">
    <car-card v-for="car in filteredCarsListByYear" :key="car.id" :car="car" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CarCard from './CarCard.vue'
export default {
  components: { CarCard },
  name: 'CarsList',

  computed: {
    ...mapGetters(['filteredCarsListByYear']),
  },
}
</script>

<style lang="scss" scoped>
</style>