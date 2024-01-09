<template>
  <div>
    <ul>
      <li v-for="bus in busesList" :key="bus.id">
        {{ bus.number }} - {{ bus.placesNumber }}
        <button @click="deleteBus(bus.id)">Delete</button>
        <button @click="onEdit(bus.id)">Edit</button>
      </li>
    </ul>
    <router-link :to="{ name: 'bus-edit' }"> Додати автобус </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BusesView',
  computed: {
    ...mapGetters('buses', ['busesList']),
  },
  methods: {
    ...mapActions('buses', ['deleteBus']),
    onEdit(busId) {
      this.$router.push({
        name: 'bus-edit',
        params: {
          id: busId,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>