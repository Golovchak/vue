<template>
  <div>
    <ul>
      <li v-for="driver in filteredDriversList" :key="driver.id">
        {{ driver.name }} - {{ driver.exp }}
        <button @click="onEdit(driver.id)">Edit</button>
        <button @click="deleteDrivers(driver.id)">Delete</button>
      </li>
    </ul>
    <router-link :to="{ name: 'driver-edit' }"> Add driver </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'DriversList',
  computed: {
    ...mapGetters('drivers', ['filteredDriversList']),
  },
  methods: {
    ...mapActions('drivers', ['deleteDrivers']),
    onEdit(driverId) {
      this.$router.push({
        name: 'driver-edit',
        params: {
          id: driverId,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>