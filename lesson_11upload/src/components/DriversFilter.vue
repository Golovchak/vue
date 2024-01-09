<template>
  <h2>Фільтри</h2>
  <div class="row">
    <label>
      ПІБ водія
      <input v-model="filterData.name" type="text" />
    </label>
    <div>
      Стаж водія
      <label>
        Від
        <input v-model="filterData.expMin" type="number" />
      </label>
      <label>
        До
        <input v-model="filterData.expMax" type="number" />
      </label>
    </div>
    <button @click="onReset">Reset</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DriversFilter',
  data() {
    return {
      filterData: {},
    }
  },
  watch: {
    filterData: {
      handler(newValue) {
        this.setFilter(newValue)
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions('drivers', ['setFilter']),
    onReset() {
      this.filterData = {}
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  input {
    width: 100px;
  }
}
</style>