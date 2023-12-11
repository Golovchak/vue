<template>
  <div>
    <label>
      Введіть шлях до файлу
      <input
        :class="[{ 'wrong-value': pathValid }]"
        v-model="enteredPath"
        type="text"
      />
    </label>
  </div>
  <div>Components value: {{ enteredPath }}</div>
</template>

<script>
export default {
  name: "InputPath",
  data() {
    return {
      pathValid: false,
    };
  },
  props: {
    modelValue: { type: String },
    modelModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    enteredPath: {
      get() {
        return this.modelValue;
      },
      set(path) {
        if (this.modelModifiers.checkPath) {
          this.pathValidator(path);
        }
        this.$emit("update:modelValue", path);
      },
    },
  },
  methods: {
    pathValidator(path) {
      if (path && !/^([0-9A-Za-z_-]\/?)*[0-9A-Za-z_-]\.js$/g.test(path))
        this.pathValid = true;
      else this.pathValid = false;
    },
  },
};
</script>

<style lang="css" scoped>
.wrong-value {
  background-color: red;
}
</style>