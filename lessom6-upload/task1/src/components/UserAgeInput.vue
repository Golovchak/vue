<template>
  <div>
    <label>
      {{ title }}
      <input
        v-model="enteredAge"
        type="number"
        ref="cardValue"
        :key="updateKey"
        :class="colorClass"
      />
    </label>
  </div>
  <div v-if="negativeNumber">Значення віку не може бути від'ємним числом</div>
  <div v-if="valueTooLarge">Вік не може бути більше 150</div>
  <!-- <div>Components value: {{ enteredAge }}</div> -->
</template>

<script>
export default {
  name: "UserAgeInput",
  data() {
    return {
      currentAge: null,
      negativeNumber: null,
      updateKey: 0,
      colorClass: "",
      valueTooLarge: false,
    };
  },
  props: {
    title: { type: String, default: "" },
    modelValue: { type: Number },
    modelModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    enteredAge: {
      get() {
        if (this.modelModifiers.check)
          return this.allowableAge(this.modelValue);
        return this.modelValue;
      },
      set(val) {
        if (this.modelModifiers.check) {
          val = this.allowableAge(val);
          this.$nextTick(() => {
            this.updateKey++;
            this.$nextTick(() => {
              this.$refs.cardValue.focus();
            });
          });
          this.$emit("update:modelValue", val);
        }
        if (this.modelModifiers.setColor) this.scaleColor(val);
      },
    },
  },
  methods: {
    scaleColor(age) {
      if (age < 10) {
        // console.log("color green");
        this.colorClass = "young-child-age";
      } else if (age < 21) {
        this.colorClass = "child-age";
      } else this.colorClass = "accepted-age";
      return this.colorClass;
    },
    allowableAge(age) {
      if (age < 0) {
        this.negativeNumber = true;
        return null;
      } else this.negativeNumber = false;

      if (age <= 150) {
        this.currentAge = age;
        this.valueTooLarge = false;
        return this.currentAge;
      } else {
        this.valueTooLarge = true;
      }
      return this.currentAge;
    },
  },
};
</script>

<style lang="css" scoped>
.young-child-age {
  font-weight: bold;
  color: green;
}
.child-age {
  color: yellow;
}
.accepted-age {
  color: orange;
}
</style>