<template>
  <div class="lessons-editor row">
    <div>
      <label
        >Оберіть урок
        <select v-model="lesson.subjectId">
          <option v-for="{ id, subject } in subjects" :key="id" :value="id">{{ subject }}</option>
        </select>
      </label>
    </div>
    <div>
      <label
        >Оберіть клас
        <select v-model="lesson.classId">
          <option v-for="{ id, classTitle } in classesList" :key="id" :value="id">{{ classTitle }}</option>
        </select>
      </label>
    </div>
    <div>
      <button-comp v-if="!isIdReceived" title="Clear" @click="lesson = {}" />
      <button-comp :title="buttonTitle" @click="onClick" />
      <button-comp title="Відмінити" @click="goBack" />
    </div>
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ButtonComp },
  name: 'LessonsEditor',
  data() {
    return {
      lesson: {},
    }
  },
  created() {
    if (this.isIdReceived) this.lesson = { ...this.getLessonById(this.isIdReceived) }
  },
  computed: {
    ...mapGetters('subjects', ['subjects', 'classesList', 'getLessonById']),
    isIdReceived() {
      return this.$route.params.id
    },
    buttonTitle() {
      return this.$route.params.id ? 'Зберегти' : 'Додати'
    },
  },
  methods: {
    ...mapActions('subjects', ['addLesson', 'updateLesson']),
    goBack() {
      this.$router.push({
        name: 'lessons',
      })
    },
    onClick() {
      if (!this.isIdReceived) this.addLesson(this.lesson)
      else this.updateLesson(this.lesson)
      this.goBack()
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  max-width: 600px;
  justify-content: space-between;
}
</style>