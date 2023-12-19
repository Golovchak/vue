<template>
  <div class="row">
    <filter-elem title="Список студентів" />
    <filter-elem v-model="systemValue" title="Система оцінювання" :options="ratingSystem" />
    <filter-elem v-model="gradeValue" title="Категорія" :options="ratingGrade" />
  </div>
  <div>{{ testFun }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterElem from './FilterElem.vue'

export default {
  components: { FilterElem },
  name: 'FilterBar',

  computed: {
    ...mapGetters(['ratingSystem', 'ratingGrade', 'ratingSystemValue', 'ratingGradeValue']),

    systemValue: {
      get() {
        return this.ratingSystemValue
      },
      set(val) {
        this.setRatingSystemValue(val)
      },
    },
    gradeValue: {
      get() {
        return this.ratingGradeValue
      },
      set(val) {
        this.setRatingGradeValue(val)
      },
    },
  },
  methods: {
    ...mapActions(['setRatingSystemValue', 'setRatingGradeValue']),
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
}
</style>