<template>
  <div align="center">
  <br><br>
    <board-register-form @submit="onSubmit"/>
    <Layout/>
  </div>
</template>

<script>
import BoardRegisterForm from '@/components/BoardRegisterForm'
import Layout from '@/components/Layout'
import axios from 'axios'

export default {
  name: 'BoardRegisterPage',
  components: {
    BoardRegisterForm,
    Layout
  },
  methods: {
    onSubmit (payload) {
      console.log('BoardRegisterPage onSubmit()')
      const { title, content, writer } = payload
      axios.post('http://localhost:7777/boards', { title, writer, content })
        .then(res => {
          console.log(res)
          this.$router.push({
            name: 'VuetifyBoardListPage',
            params: { boardNo: res.data.boardNo.toString() }
          })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
