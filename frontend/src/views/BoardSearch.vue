<template>
  <div align="center">
    <BoardSearchForm :db="db"/>
    <Layout/>
  </div>
</template>

<script>
import BoardSearchForm from '@/components/BoardSearchForm'
import Layout from '@/components/Layout'
import axios from 'axios'

export default {
  name: 'BoardSearch',
  components: {
    BoardSearchForm,
    Layout
  },
  data () {
    return {
      db: []
    }
  },
  created () {
    axios.get('http://localhost:7777/boards')
      .then(res => {
        console.log(res)
        this.db = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
