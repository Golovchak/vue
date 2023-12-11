<template>
  <user-age-input v-model.check.setColor="userAge" title="Введіть ваш вік:" />
  <!-- <div>App value: {{ userAge }}</div> -->
</template>

<script>
import UserAgeInput from "./components/UserAgeInput.vue";
export default {
  name: "App",
  components: { UserAgeInput },

  data() {
    return {
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
