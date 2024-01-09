<template>
  <div>
    <drivers-filter />
  </div>
  <div>
    <drivers-list />
  </div>
</template>

<script>
import DriversList from '@/components/DriversList.vue'
import DriversFilter from '@/components/DriversFilter.vue'
export default {
  name: 'DriversView',
  components: { DriversList, DriversFilter },
}
</script>

<style lang="scss" scoped>
</style>