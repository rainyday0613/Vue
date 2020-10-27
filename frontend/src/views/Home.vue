<template>
  <div align="center">
    <login-form @submit="onSubmit"/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    LoginForm
  },
  methods: {
    onSubmit (payload) {
      console.log('loginPage onSubmit()')
      this.login(payload).then(res => {
        this.$router.push({ name: 'Main' })
      }).catch(err => {
        // alert(err.response.data.message)
        alert('The username or password you entered is incorrect', err)
      })
    },
    ...mapActions(['login'])
  }
}
</script>
