<template>
  <div v-if="currencyList.length">
    <label fof="currency">Оберіть валюту </label>
    <select id="currency" v-model="selectedCurrency">
      <option v-for="currency in currencyList" :key="currency.title" :value="currency">
        {{ currency.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { currencyList } from './settings'
export default {
  name: 'CurrencySelector',
  data() {
    return {
      currencyList,
    }
  },
  computed: {
    ...mapGetters(['currentCurrency']),
    selectedCurrency: {
      get() {
        return this.currentCurrency
      },
      set(val) {
        this.setCurrentCurrency(val)
      },
    },
  },
  methods: {
    ...mapActions(['setCurrentCurrency']),
  },
}
</script>

<style lang="scss" scoped>
</style>