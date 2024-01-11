<template>
  <button :disabled="!user.login">{{ title }}</button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ButtonComp',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['user']),
  },
}
</script>

<style lang="scss" scoped>
</style>