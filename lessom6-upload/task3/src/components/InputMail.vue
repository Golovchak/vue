<template>
  <div>
    <label>
      Введіть ваш e-mail:
      <input
        :class="[{ 'wrong-value': !mailValid }]"
        v-model="enteredMail"
        type="text"
      />
    </label>
  </div>
  <div v-if="!mailValid" class="alert">
    Мейл може складатися виключно із букв, цифр та сиволів "_" та "-", і не
    містити пробіли!!!
  </div>
  <div v-else-if="mailLength">
    Мейл повинен складатися не менш ніж з 4 символів.
  </div>

  <div>Components value: {{ enteredMail }}</div>
  <!-- <div>mailLength: {{ mailLength }}</div> -->
</template>

<script>
export default {
  name: "InputMail",
  data() {
    return {
      mailValid: true,
      mailLength: null,
    };
  },
  props: {
    modelValue: { type: String },
    modelModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    enteredMail: {
      get() {
        // if (this.modelModifiers.check && this.modelValue) {
        //   // return this.modelValue + "@inv.mn.edu";
        // } else
        return this.modelValue;
      },
      set(mail) {
        if (this.modelModifiers.check) {
          this.mailValidator(mail);
          mail = mail.replace(/(@inv\.mn\.ed)$/, "");
          mail = mail.replace(/@$/, "@inv.mn.edu");
        }
        this.$emit("update:modelValue", mail);
      },
    },
  },
  methods: {
    mailValidator(mail) {
      if (mail) {
        this.mailValid = /^[@.A-Za-z0-9_-]+$/.test(mail);
        // this.mailLength = mail.length < 4;
      } else {
        this.mailValid = true;
        // this.mailLength = false;
      }
      this.mailLength = mail.length !== 0 && mail.length < 4;
    },
  },
};
</script>

<style lang="css" scoped>
.wrong-value {
  background-color: red;
}
.alert {
  color: red;
}
</style>