<template>
  <div class="list-container">
    <div class="row subtitle">
      <div>ПІБ</div>
      <div>Середній бал</div>
    </div>
    <div v-for="student in list" :key="student.id" class="row">
      <div>{{ student.surname }} {{ student.name }}</div>
      <div>{{ student.rating }}</div>
    </div>
  </div>
  <div>{{ ratingGradeValue }}</div>
</template>

<script>
export default {
  name: 'StudentList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.list-container {
  margin-top: 15px;
  max-width: 400px;
}
.row {
  display: flex;
  justify-content: space-between;
}
.subtitle {
  font-weight: 700;
}
</style>