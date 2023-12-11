<template>
  <div>
    <label
      >Введіть ваше ім'я
      <input
        type="text"
        v-model="nameValue"
        :class="{ 'red-alert': validName }"
      />
    </label>
    <label>
      Введіть ваш вік
      <input type="number" v-model="ageValue" :class="validAge" />
    </label>
  </div>
  <div>Component data: {{ nameValue }}: {{ ageValue }}</div>
</template>

<script>
export default {
  name: "InputUserData",
  data() {
    return {
      validName: null,
      validAge: null,
    };
  },
  props: {
    name: { type: String },
    nameModifiers: { default: () => ({}) },
    age: { type: Number },
    ageModifiers: { default: () => ({}) },
  },
  computed: {
    nameValue: {
      get() {
        return this.name;
      },
      set(newVal) {
        if (this.nameModifiers.fieldEmpty) this.isFieldEmpty(newVal);
        this.$emit("update:name", newVal);
      },
    },
    ageValue: {
      get() {
        return this.age;
      },
      set(newVal) {
        if (this.ageModifiers.quiteMature) this.isQuiteMature(newVal);
        this.$emit("update:age", newVal);
      },
    },
    // validAge(val) {
    //   if (!val) return "";
    //   if (val < 18) return "red-alert";
    //   else return "green-alert";
    // },
  },
  methods: {
    isFieldEmpty(val) {
      this.validName = !val;
    },
    isQuiteMature(val) {
      if (!val) this.validAge = "";
      else if (val < 18) this.validAge = "red-alert";
      else this.validAge = "green-alert";
    },
  },
};
</script>

<style lang="css" scoped>
.red-alert {
  background-color: red;
}
.green-alert {
  background-color: green;
}
</style>