<template>
  <div class="subject-list">
    <div class="row">
      <div class="subtitle subject">Урок</div>
      <div class="subtitle">Клас</div>
    </div>
    <div v-for="{ id, subjectId, classId } in lessonsList" :key="id" class="row">
      <div class="subject">
        {{ getSubjectTitleById(subjectId) }}
      </div>
      <div class="class-column">
        {{ getClassTitleById(classId) }}
      </div>
      <button-comp title="Edit" @click="onClick(id)" />
      <button-comp title="Delete" @click="onDelete(id)" />
    </div>
    <button-comp title="Додати урок" @click="onClick()" />
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ButtonComp },
  name: 'LessonsView',
  computed: {
    ...mapGetters('subjects', ['lessonsList', 'getSubjectTitleById', 'getClassTitleById']),
  },
  methods: {
    ...mapActions('subjects', ['deleteLesson']),
    ...mapActions('assignments', ['deleteAssignmentByLessonId']),
    onDelete(id) {
      this.deleteLesson(id)
      this.deleteAssignmentByLessonId(id)
    },
    onClick(id) {
      this.$router.push({
        name: 'lessons-editor',
        params: {
          id: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.subtitle {
  margin: 5px 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}
.class-column {
  width: 140px;
  text-align: center;
}

.subject {
  width: 240px;
}
</style>