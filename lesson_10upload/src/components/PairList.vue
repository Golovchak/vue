<template>
  <div class="pair__block">
    <h3 class="pair__title">{{ title }}</h3>
    <div v-if="pairs.boys.length !== 0" class="pair__list">
      <div v-for="(boy, index) in pairs.boys" :key="index" class="pair__elem" @click="$emit('delete', index)">
        {{ getBoyName(boy) }} -
        {{ getGirlName(pairs.girls[index]) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PairList',
  props: {
    title: {
      type: String,
      default: '',
    },
    pairs: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(['getPersonById']),
  },
  methods: {
    getBoyName(boy) {
      return this.getPersonById({ source: 'boysList', id: boy })
    },
    getGirlName(girl) {
      return this.getPersonById({ source: 'girlsList', id: girl })
    },
  },
}
</script>

<style lang="scss" scoped>
.pair__list {
  border: 3px solid #000;
  width: 320px;
  padding: 8px;
}
.pair__elem {
  cursor: pointer;
}
</style>