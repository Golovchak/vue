<template>
  <div class="list-block">
    <h3 class="list__title">{{ title }}</h3>
    <div v-if="personsIdList.length !== 0" class="list">
      <div
        v-for="id in personsIdList"
        :key="id"
        class="list__elem"
        :class="{ 'is-selected': selectedPerson == id }"
        @click="$emit('selected', id)"
      >
        {{ getPersonName(id) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PersonsList',
  props: {
    title: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
    personsIdList: {
      type: Array,
      default: () => [],
    },
    selectedPerson: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['getPersonById']),
  },
  methods: {
    getPersonName(personId) {
      let param = {
        source: this.source,
        id: personId,
      }
      return this.getPersonById(param)
    },
  },
}
</script>

<style lang="scss" scoped>
.list-block {
  width: 180px;
  margin: 5px;
}
.list {
  border: 3px solid #000;
  padding: 8px;
}
.list__elem {
  line-height: 1.3;
  cursor: pointer;
}
.is-selected {
  border: 3px solid blue;
}
</style>