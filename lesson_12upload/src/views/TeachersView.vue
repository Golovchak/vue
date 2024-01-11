<template>
  <div class="teachers-list">
    <div class="row">
      <div class="subtitle">ПІБ</div>
      <div class="subtitle">Спеціалізація</div>
    </div>
    <div v-for="{ id, name, subjectId } in teachersList" :key="id" class="row">
      <div class="teacher">
        {{ name }}
      </div>
      <div class="subject">
        {{ getSubjectTitleById(subjectId) }}
      </div>
      <div>
        <button-comp title="Edit" @click="onClick(id)" />
        <button-comp title="Delete" @click="onDelete(id)" />
      </div>
    </div>
    <button-comp title="Додати" @click="onClick()" />
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TeachesView',
  components: { ButtonComp },
  computed: {
    ...mapGetters('teachers', ['teachersList']),
    ...mapGetters('subjects', ['getSubjectTitleById']),
  },
  methods: {
    ...mapActions('teachers', ['deleteTeacher']),
    ...mapActions('assignments', ['deleteAssignmentByTeacherId']),
    onDelete(id) {
      this.deleteTeacher(id)
      this.deleteAssignmentByTeacherId(id)
    },
    onClick(id) {
      this.$router.push({
        name: 'teaches-editor',
        params: { id: id },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  .subtitle {
    margin: 5px 70px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .teacher,
  .subject {
    width: 200px;
  }
}
</style>