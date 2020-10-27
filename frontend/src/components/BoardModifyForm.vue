<template>
  <div>
    <form @submit.prevent="onSubmit">
    <br><br>
    <h1>게시판</h1>
      <table><br><br></table>
      <table class="wp">
        <tr>
          <td>No</td>
          <td><input type="text" :value="board.boardNo" disabled></td>
        </tr>
        <tr>
          <td>제목</td>
          <td><input type="text" v-model="title"></td>
        </tr>
        <tr>
          <td>작성자</td>
          <td><input type="text" :value="board.writer" disabled></td>
        </tr>
        <tr>
          <td>내용</td>
          <td><textarea v-model="content" rows="5"></textarea></td>
        </tr>
      </table>
      <br>
      <div>
        <button type="submit">수정</button>
        <router-link tag="button" style="text-decoration: none; color: white" :to="{ name: 'BoardReadPage', params: { boardNo: board.boardNo.toString() } }">
          취소
        </router-link>
      </div>
    </form>
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from '../components/Layout'

export default {
  components: { Layout },
  name: 'BoardModifyForm',
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    onSubmit () {
      const { title, content } = this
      this.$emit('submit', { title, content })
    }
  },
  created () {
    this.title = this.board.title
    this.content = this.board.content
  }
}
</script>

<style scoped>
button {
  color: white;
}
textarea {
  width: 100%;
  height: 500px;
  resize:none;
}
</style>
