<template>
  <div align="center">
    <div>
     <BoardListPageForm :listArray="pageArray"
          :pageSize="pageSize"/>
    </div>
    <Layout/>
  </div>
</template>

<script>
import axios from 'axios'
import BoardListPageForm from '@/components/BoardListPageForm.vue'
import Layout from '@/components/Layout.vue'

export default {
  name: 'VuetifyBoardListPage',
  components: {
    BoardListPageForm,
    Layout
  },
  data () {
    return {
      pageArray: [],
      pageSize: 15
    }
  },
  created () {
    axios.get('http://localhost:7777/boards')
      .then(res => {
        console.log(res)
        this.pageArray = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
