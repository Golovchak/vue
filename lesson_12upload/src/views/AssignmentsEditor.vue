<template>
  <div class="assignments-editor row">
    <div>
      <label
        >Учитель
        <select v-model="assignment.teacherId">
          <option v-for="{ id, name } in getCurrentTeacherList" :key="id" :value="id">{{ name }}</option>
          <!-- <option v-for="{ id, name } in teachersList" :key="id" :value="id">{{ name }}</option> -->
        </select>
      </label>
    </div>
    <div>
      <label
        >Урок
        <select v-model="assignment.lessonId">
          <option v-for="{ id, subjectId, classId } in getCurrentLessonsList" :key="id" :value="id">
            <!-- <option v-for="{ id, subjectId, classId } in lessonsList" :key="id" :value="id"> -->
            {{ getSubjectTitleById(subjectId) }} - {{ getClassTitleById(classId) }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <button-comp title="Clear" @click="assignment = {}" />
      <button-comp :title="buttonTitle" @click="onClick" />
      <button-comp title="Відмінити" @click="goBack" />
    </div>
  </div>
  <p>
    Була "геніальна" думка вибирати уроки і вчителів за відповідністю по предмету. При виконанні завдання помітив дану
    закономірність на таблицях приведених у домашньому завданні. Замалі списки для коректної роботи (хоча у малих школах
    десь такий вибір і буде)
  </p>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ButtonComp },
  name: 'AssignmentsEditor',
  data() {
    return {
      assignment: {},
    }
  },
  created() {
    if (this.isIdReceived) this.assignment = { ...this.getAssignmentById(this.isIdReceived) }
  },
  computed: {
    ...mapGetters('assignments', ['assignmentsList', 'getAssignmentById']),
    ...mapGetters('teachers', ['getTeacherById', 'teachersList']),
    ...mapGetters('subjects', ['getSubjectTitleById', 'getClassTitleById', 'lessonsList', 'getLessonById']),
    getCurrentLessonsList() {
      if (!this.assignment.teacherId) return this.lessonsList
      const teacherSubjectId = this.getTeacherById(this.assignment.teacherId).subjectId
      return this.lessonsList.filter((lesson) => lesson.subjectId == teacherSubjectId)
    },
    getCurrentTeacherList() {
      if (!this.assignment.lessonId) return this.teachersList
      const lessonSubjectId = this.getLessonById(this.assignment.lessonId).subjectId
      return this.teachersList.filter((teacher) => teacher.subjectId == lessonSubjectId)
    },
    isIdReceived() {
      return this.$route.params.id
    },
    buttonTitle() {
      return this.isIdReceived ? 'Зберегти' : 'Додати'
    },
  },
  methods: {
    ...mapActions('assignments', ['deleteAssignment', 'addAssignment', 'updateAssignment']),
    goBack() {
      this.$router.push({ name: 'assignments' })
    },
    onClick() {
      if (!this.isIdReceived) this.addAssignment(this.assignment)
      else this.updateAssignment(this.assignment)
      this.goBack()
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
}
</style>