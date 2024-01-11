<template>
  <div class="row">
    <div>
      <label
        >Введіть ім'я
        <input v-model="teacher.name" type="text" />
      </label>
    </div>
    <div>
      <label
        >Оберіть предмет
        <select v-model="teacher.subjectId">
          <option v-for="{ id, subject } in subjects" :key="id" :value="id">{{ subject }}</option>
        </select>
      </label>
    </div>
    <div>
      <button-comp v-if="!isReceivedId" title="Clear" @click="teacher = {}" />
      <button-comp :title="buttonTitle" @click="onClick" />
      <button-comp title="Відмінити" @click="goBack" />
    </div>
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TeachersEditor',
  components: { ButtonComp },
  data() {
    return {
      teacher: {},
    }
  },
  created() {
    if (this.isReceivedId) this.teacher = { ...this.getTeacherById(this.isReceivedId) }
  },
  computed: {
    ...mapGetters('subjects', ['subjects']),
    ...mapGetters('teachers', ['getTeacherById']),
    isReceivedId() {
      return this.$route.params.id
    },
    buttonTitle() {
      return this.isReceivedId ? 'Зберегти' : 'Додати'
    },
  },
  methods: {
    ...mapActions('teachers', ['addTeacher', 'updateTeacher']),
    onClick() {
      if (!this.isReceivedId) this.addTeacher(this.teacher)
      else this.updateTeacher(this.teacher)
      this.goBack()
    },
    goBack() {
      this.$router.push({ name: 'teachers' })
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  max-width: 90%;
  display: flex;
  justify-content: space-between;
}
</style>