<template>
  <div>
    <label
      >{{ title }}
      <select v-if="options" v-model="selectValue">
        <option v-for="(option, index) in options" :key="index" :value="index">{{ option }}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FilterElem',

  props: {
    title: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: null,
    },
    modelValue: {
      type: Number,
      default: null,
    },
  },

  emits: ['update:modelValue'],
  computed: {
    selectValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>