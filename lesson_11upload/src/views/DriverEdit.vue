<template>
  <div>
    <div>
      <label
        >ПІБ водія
        <input v-model="driver.name" type="text" />
      </label>
    </div>
    <div>
      <label
        >Стаж водія
        <input v-model="driver.exp" type="number" />
      </label>
    </div>
    <button @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'DriverEdit',
  data() {
    return {
      driver: {},
    }
  },
  created() {
    if (this.receiveId) this.driver = { ...this.getDriverById(this.receiveId) }
  },
  computed: {
    ...mapGetters('drivers', ['getDriverById']),
    receiveId() {
      return this.$route.params.id
    },
    actionButtonTitle() {
      return this.receiveId ? 'Зберегти' : 'Створити'
    },
  },
  methods: {
    ...mapActions('drivers', ['addDriver', 'updateDriver']),
    onAction() {
      if (!this.receiveId) this.addDriver(this.driver)
      else this.updateDriver(this.driver)
      this.$router.push({ name: 'drivers' })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>