<template>
  <div class="filter">
    <select v-model="selectParam" @change="$emit('selected', selectParam)">
      <option v-for="elem in filterParams" :key="elem" :value="elem">{{ elem }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterElem',
  data() {
    return {
      selectParam: null,
    }
  },
  props: {
    filterParams: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
</style>