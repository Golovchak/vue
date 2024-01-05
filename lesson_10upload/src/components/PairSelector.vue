<template>
  <div class="row">
    <persons-list
      :persons-id-list="boysIdList"
      title="Хлопці"
      source="boysList"
      :selected-person="currentSelectedBoyId"
      @selected="selectBoy($event, personId)"
    />
    <persons-list
      :persons-id-list="girlsIdList"
      title="Дівчата"
      source="girlsList"
      :selected-person="currentSelectedGirlId"
      @selected="selectGirl($event, personId)"
    />
  </div>
  <button class="button" :disabled="!isAvailable" @click="addPair">Додати</button>
  <pair-list :pairs="pairs" title="Обрані пари" @delete="deletePair($event, index)" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PairList from './PairList.vue'
import PersonsList from './PersonsList.vue'
export default {
  name: 'PairSelector',
  components: { PersonsList, PairList },
  computed: {
    ...mapGetters(['boysIdList', 'girlsIdList', 'pairs', 'currentSelectedBoyId', 'currentSelectedGirlId']),
    isAvailable() {
      return this.currentSelectedBoyId && this.currentSelectedGirlId
    },
  },
  created() {
    this.loadData()
  },
  methods: {
    ...mapActions(['loadData', 'personSelected', 'addPair', 'deletePair']),
    selectBoy(boyId) {
      this.personSelected({ boyId })
    },
    selectGirl(girlId) {
      this.personSelected({ girlId })
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  column-gap: 20px;
}
.button {
  padding: 4px 10px;
  letter-spacing: 0.2em;
  font-weight: bold;
  margin: 20px 160px;
}
</style>