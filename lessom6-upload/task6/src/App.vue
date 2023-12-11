<template>
  <card-data-field
    v-model:cardNumber.separate4Digits.digitsOnly="cardNumberValue"
    v-model:cardExpiry.slashInsert.digitsOnly="cardExpiryValue"
    v-model:cardCode="cardCodeValue"
  />
  <div>App value</div>
  <div>{{ cardNumberValue }}</div>
  <div>{{ cardExpiryValue }}</div>
  <div>{{ cardCodeValue }}</div>
</template>

<script>
import CardDataField from "./components/CardDataField.vue";
export default {
  name: "App",
  components: { CardDataField },
  data() {
    return {
      cardNumberValue: null,
      cardExpiryValue: null,
      cardCodeValue: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
