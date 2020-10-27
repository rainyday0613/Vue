<template>
  <div align="center">
    <board-read v-if="board" :board="board"/>
    <p v-else>Loading ...</p>
    <br>
    <router-link tag="button" style="text-decoration: none; color:white;" :to="{ name: 'BoardModifyPage', params: { boardNo } }">
      수정
    </router-link>
    <button @click="onDelete">삭제</button>
    <button @click="$router.push('/VuetifyBoardListPage')">목록</button>
    <Layout/>
  </div>
</template>

<script>
import BoardRead from '@/components/BoardRead'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
import Layout from '@/components/Layout'

export default {
  name: 'BoardReadPage',
  props: {
    boardNo: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState([
      'board'
    ])
  },
  created () {
    console.log('BoardReadPage created(): ' + this.boardNo)
    this.fetchBoard(this.boardNo)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.push()
      })
  },
  methods: {
    ...mapActions([
      'fetchBoard'
    ]),
    onDelete () {
      const { boardNo } = this.board
      axios.delete(`http://localhost:7777/boards/${boardNo}`)
        .then(res => {
          this.$router.push({ name: 'VuetifyBoardListPage' })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  components: {
    BoardRead,
    Layout
  }
}
</script>
