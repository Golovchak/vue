<template>
  <div>
    <assignments-list />
  </div>
  <div>
    <assignment-creator />
  </div>
</template>

<script>
import AssignmentsList from '@/components/AssignmentsList.vue'
import AssignmentCreator from '@/components/AssignmentCreator.vue'
export default {
  name: 'AssignmentsView',
  components: { AssignmentsList, AssignmentCreator },
}
</script>

<style lang="scss" scoped>
</style>