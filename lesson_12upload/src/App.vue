<template>
  <nav>
    <div>
      <router-link to="/"> Головна </router-link>
      <router-link to="/teachers"> Вчителі </router-link>
      <router-link to="/lessons"> Предмети </router-link>
      <router-link to="/assignments"> Призначення </router-link>
    </div>
    <div>
      <router-link
        :to="{
          name: 'user',
          params: {
            login: user.login,
          },
        }"
      >
        {{ userFieldMassage }}
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  created() {
    const user = JSON.parse(localStorage.getItem('userData'))
    if (user) this.setUserData(user)
  },
  computed: {
    ...mapGetters(['user']),
    userFieldMassage() {
      return this.user.login ? `${this.user.login}` : "Ім'я користувача"
    },
  },
  methods: {
    ...mapActions(['setUserData']),
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background: #ddd;
  max-width: 800px;
  min-width: 640px;
  min-height: 500px;
  margin: 0 auto;
  padding-left: 20px;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;
    text-decoration: none;

    &.router-link-exact-active {
      border: 3px solid #42b983;
      border-radius: 10px;
      // color: #42b983;
    }
  }
}
</style>
