<template>
  <form @submit.prevent="onSubmit">
    <h1>게시판</h1>
    <table>
      <br><br>
    </table>
    <table class="wp">
      <tr>
        <td align="center">제목</td>
          <td><input type="text" v-model="title"></td>
      </tr>
      <tr>
        <td align="center">작성자</td>
        <td><input type="text" v-model="writer"></td>
      </tr>
      <tr>
        <td align="center">내용</td>
        <td><textarea id="txtarea" v-model="content" rows="5"></textarea></td>
      </tr>
    </table>
    <br>
    <div>
      <button @click="start('OnSubmit')">글쓰기</button>
      <button @click="$router.push('/VuetifyBoardListPage')">취소</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BoardRegisterForm',
  data () {
    return {
      title: '',
      writer: '',
      content: ''
    }
  },
  methods: {
    onSubmit () {
      const { title, writer, content } = this
      this.$emit('submit', { title, writer, content })
    }
  }
}
</script>

<style>
wp {
  width: 750px;
  border-collapse: collapse;
  margin:50px auto;
}
button {
  border: none;
  padding: 10px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-right:30px;
  margin-left: 30px;
  color: white;
  background-color: #000;
}
.wp tr:nth-child(odd) {
    background-color: #fff;
}
.wp tr:nth-child(even) {
    background-color: #f1f1f1;
}
.wp tr {
    border-bottom: px solid #ddd;
}
.wp th:first-child,
.wp td:first-child {
    padding-left: 16px;
}
.wp th {
    padding: 8px 8px;
    display: table-cell;
    text-align: left;
    vertical-align: top;
}
.wp th {
    font-weight: bold;
}
.wp {
  font-size: 13px!important;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  width: 55%;
  display: table;
}
.wp td {
  border: 1px solid #ccc;
  padding: 10px 10px;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 5px 0;
  box-sizing: border-box;
}
textarea {
  width: 100%;
  height: 500px;
  resize:none;
}
</style>
