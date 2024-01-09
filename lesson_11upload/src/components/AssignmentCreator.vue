<template>
  <div>
    <h2>Додавання призначення</h2>
    <div>
      <label>
        Водій
        <select v-model="assignment.driverId">
          <option v-for="driver in driversList" :key="driver.id" :value="driver.id">
            {{ driver.name }} - {{ driver.exp }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Автобус
        <select v-model="assignment.busId">
          <option v-for="bus in busesList" :key="bus.id" :value="bus.id">
            {{ bus.number }} - {{ bus.placesNumber }}
          </option>
        </select>
      </label>
    </div>
    <button @click="onAdd">Додати призначення</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AssignmentCreator',
  data() {
    return {
      assignment: {},
    }
  },
  computed: {
    ...mapGetters('drivers', ['driversList']),
    ...mapGetters('buses', ['busesList']),
  },
  methods: {
    ...mapActions('assignments', ['addAssignment']),
    ...mapActions('buses', ['']),
    onAdd() {
      this.addAssignment(this.assignment)
      this.assignment = {}
    },
  },
}
</script>

<style lang="scss" scoped>
</style>