<template>
  <div class="login-form">
    <div v-if="!isUerLogin">
      <div>
        <label
          >Введіть логін
          <input v-model="userData.login" type="text" />
        </label>
      </div>
      <div>
        <label
          >Введіть пароль
          <input v-model="userData.password" type="text" />
        </label>
      </div>
      <button @click="onLogin">Вхід</button>
      <p>Достатньо ввести будь який логін і натиснути Вхід</p>
    </div>
    <button v-else @click="unLogin">Вихід</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginView',
  data() {
    return {
      userData: {},
    }
  },
  computed: {
    isUerLogin() {
      return this.$route.params.login
    },
  },

  methods: {
    ...mapActions(['setUserData']),
    onLogin() {
      window.localStorage.setItem('userData', JSON.stringify(this.userData))
      this.setUserData(this.userData)
      this.$router.push({
        name: 'user',
        params: {
          login: this.userData.login,
        },
      })
      this.userData = {}
    },
    unLogin() {
      window.localStorage.removeItem('userData')
      this.setUserData({})
      this.$router.push({
        name: 'user',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  text-align: center;
  line-height: 1.7;
}
</style>