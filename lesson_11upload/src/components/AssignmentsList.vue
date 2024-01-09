<template>
  <div>
    <h2>Призначення</h2>
    <div>
      <div v-for="assignment in getFiledAssignmentsList" :key="assignment.id">
        {{ assignment.driverName }} - {{ assignment.busNumber }}
        <button @click="deleteAssignments(assignment.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AssignmentsList',
  computed: {
    ...mapGetters('assignments', ['getFiledAssignmentsList']),
  },
  methods: {
    ...mapActions('assignments', ['deleteAssignments']),
  },
}
</script>

<style lang="scss" scoped>
</style>