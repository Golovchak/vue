<template>
  <div class="home">
    <h1>Вітаємо на сайті школи!</h1>
    <div v-if="!user.login">Виконайте <router-link to="/user">вхід</router-link> для подальшої роботи</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(['user']),
  },
}
</script>
