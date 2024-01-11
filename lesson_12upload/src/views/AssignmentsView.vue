<template>
  <div class="assignments-list">
    <div class="row subtitle">
      <div class="teachers">ПІБ</div>
      <div class="lessons">Урок</div>
      <div class="classes">Клас</div>
    </div>
    <div>
      <div v-for="({ id, teacherId, lessonId }, index) in assignmentsList" :key="id" class="row">
        <div class="column">{{ index + 1 }}. {{ getTeacherById(teacherId).name }}</div>
        <div class="column">{{ getSubjectTitleById(getLessonById(lessonId).subjectId) }}</div>
        <div class="column">
          {{ getClassTitleById(getLessonById(lessonId).classId) }}
        </div>
        <div>
          <button-comp title="Edit" @click="onClick(id)" />
          <button-comp title="Delete" @click="deleteAssignment(id)" />
        </div>
      </div>
    </div>
    <button-comp title="Додати" @click="onClick()" />
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ButtonComp },
  name: 'AssignmentsView',
  computed: {
    ...mapGetters('assignments', ['assignmentsList']),
    ...mapGetters('subjects', ['getLessonById', 'getSubjectTitleById', 'getClassTitleById']),
    ...mapGetters('teachers', ['getTeacherById']),
  },
  methods: {
    ...mapActions('assignments', ['deleteAssignment']),
    onClick(id) {
      this.$router.push({
        name: 'assignments-editor',
        params: {
          id: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.assignments-list {
  max-width: 700px;
}
.row {
  display: flex;
  justify-content: space-between;
}
.subtitle {
  max-width: 450px;
  div {
    margin: 5px 20px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }
}
.column {
  width: 140px;
}
</style>