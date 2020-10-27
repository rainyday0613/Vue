<template>
  <div align="center">
    <SignUpPage @submit="onSubmit"/>
  </div>
</template>

<script>
import axios from 'axios'
import SignUpPage from '@/components/SignUpPage.vue'

export default {
  name: 'SignUp',
  components: {
    SignUpPage
  },
  methods: {
    onSubmit (payload) {
      console.log('payload: ' + payload.userId +
                  ', ' + payload.userName +
                  ', ' + payload.userPw)
      const { userId, userName, userPw } = payload
      axios.post('http://localhost:7777/users/setup',
        { userId, userName, userPw })
        .then(res => {
          alert('회원가입 완료')
          this.$router.push({
            name: 'Home'
          })
        })
        .catch(err => {
          alert(err.response.data)
        })
    }
  }
}
</script>
