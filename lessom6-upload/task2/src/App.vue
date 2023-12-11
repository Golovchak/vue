<template>
  <input-path v-model.checkPath="inputValue" />
  <div>App value: {{ inputValue }}</div>

  <!-- Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити
  шлях до файлу js (URL, що закінчується розширенням js). При заданні
  модифікатора checkPath відображати червоним фоном input, якщо шлях
  некоректний. -->
</template>

<script>
import InputPath from "./components/InputPath.vue";
export default {
  name: "App",
  components: { InputPath },
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
