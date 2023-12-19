<template>
  <div class="container">
    <filter-bar />
    <student-list :list="getFilteredStudentList" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import FilterBar from './FilterBar.vue'
import StudentList from './StudentList.vue'
export default {
  components: { FilterBar, StudentList },
  name: 'StudentRating',

  computed: {
    ...mapGetters(['getFilteredStudentList']),
  },
  methods: {
    ...mapActions(['loadStudentList']),
  },

  created() {
    this.loadStudentList()
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 40px;
}
</style>