<template>
  <input-user-data
    v-model:name.fieldEmpty="userName"
    v-model:age.quiteMature="userAge"
  />
  <div>App data: {{ userName }}: {{ userAge }}</div>
  <!-- Розробити компонент для вводу віку користувача та імені. Робити форматування
  при заданні відповідних модифікаторів відповідних полів input: ● ім’я
  користувача - у випадку порожнього поля (червони фон) ● вік (вік менший за 18
  – колір фону червоний, інакше – зелений). -->
</template>

<script>
import InputUserData from "./components/InputUserData.vue";
export default {
  name: "App",
  components: { InputUserData },
  data() {
    return {
      userName: null,
      userAge: null,
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
