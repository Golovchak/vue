<template>
  <div>
    <div>
      <label>
        Номер автобуса:
        <input v-model="busData.number" type="text" />
      </label>
    </div>
    <div>
      <label>
        Кількість місць:
        <input v-model="busData.placesNumber" type="number" />
      </label>
    </div>
    <button @click="onAction">{{ actionButtonTitle }}</button>
    <button @click="onCancel">Відмінити</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BusEdit',
  data() {
    return {
      busData: {},
    }
  },
  computed: {
    ...mapGetters('buses', ['getBusById']),
    receiveBusId() {
      return this.$route.params.id
    },
    actionButtonTitle() {
      return this.receiveBusId ? 'Зберегти' : 'Створити'
    },
  },
  created() {
    this.busData = { ...this.getBusById(this.receiveBusId) }
  },
  methods: {
    ...mapActions('buses', ['addBus', 'updateBus']),
    onAction() {
      if (!this.receiveBusId) this.addBus(this.busData)
      else this.updateBus(this.busData)
      this.$router.push({
        name: 'buses',
      })
    },
    onCancel() {
      this.$router.push({
        name: 'buses',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>