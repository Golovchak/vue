<template>
  <div class="filer-bar">
    Фільтри:
    <div>
      Тип транспорта
      <filter-elem :filter-params="getCarCategories" @selected="setCategory($event, selectParam)" />
    </div>
    <div>
      <div>Тип кузова</div>
      <div v-for="param in getCarBodyType" :key="param">
        <label :for="param">
          <input
            v-model="checkedBodyType"
            type="checkbox"
            :value="param"
            :id="param"
            @change="setBodyType(checkedBodyType)"
          />
          {{ param }}
        </label>
      </div>
    </div>
    <div>
      Марка
      <filter-elem :filter-params="getCarMake" @selected="setMake($event, selectParam)" />
    </div>
    <div>
      Модель
      <filter-elem :filter-params="getCarModel" @selected="setModel($event, selectParam)" />
    </div>
    <div class="row">
      Роки
      <filter-elem :filter-params="getYearRangeFrom" @selected="setMinCarYear($event, selectParam)" />
      <filter-elem :filter-params="getYearRangeUntil" @selected="setMaxCarYear($event, selectParam)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterElem from './FilterElem.vue'
export default {
  name: 'FilterBar',
  components: { FilterElem },
  data() {
    return {
      checkedBodyType: [],
    }
  },
  computed: {
    ...mapGetters([
      'getCarCategories',
      'getCarBodyType',
      'getCarMake',
      'getCarModel',
      'getCarMinYear',
      'getCarMaxYear',
      'getYearRangeFrom',
      'getYearRangeUntil',
    ]),
  },
  methods: {
    ...mapActions(['setCategory', 'setMake', 'setModel', 'setBodyType', 'setMinCarYear', 'setMaxCarYear']),
  },
}
</script>

<style lang="scss" scoped>
.filer-bar {
  width: 200px;
}
.row {
  display: flex;
  column-gap: 10px;
}
</style>