<template>
  <input-mail v-model.check="inputValue" />
  <div>App value: {{ inputValue }}</div>

  <!-- Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні модифікатора check відображати червоним фоном input, якщо некоректний. -->
</template>

<script>
import InputMail from "./components/InputMail.vue";
export default {
  name: "App",
  components: { InputMail },
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
