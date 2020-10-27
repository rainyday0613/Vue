<template>
   <div>
    <br><br>
      <h1>게시판</h1>
      <table class="tba" width="70%">
       <button @click="$router.push('/VuetifyBoardListPage')">목록</button>
      </table>
      <table class="wp">
        <tr>
          <th align="center" width="15">No</th>
          <th align="center" width="500">제목</th>
          <th align="center" width="30">조회수</th>
          <th align="center" width="70">작성일</th>
          <th align="center" width="80">작성자</th>
        </tr>
        <tbody v-for="(board, idx) in db" :key="idx">
          <tr v-if="board.writer === dbserach" style="height: 40px; text-align: center">
            <td>{{ board.boardNo }}</td>
            <td align="left">
            <router-link style="text-decoration: none; color: black" :to="{ name: 'BoardReadPage',
                   params: { boardNo: board.boardNo.toString() } }">
                  {{ board.title }}
            </router-link>
            </td>
            <td>{{ board.count }}</td>
            <td>{{ board.regDate }}</td>
            <td>{{ board.writer }}</td>
          </tr>
        </tbody>
      </table><br>
  </div>
</template>

<script>
export default {
  name: 'BoardSearchForm',
  props: {
    db: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dbserach: this.$store.state.searchData
    }
  }
}
</script>

<style scoped>
wp {
  border-collapse: collapse;
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
    border-bottom: 1px solid #ddd;
}

.wp th:first-child,
.wp td:first-child {
    padding-left: 16px;
}

.wp td,
.wp th {
    padding: 8px 8px;
    display: table-cell;
    text-align: left;
    vertical-align: top;
    padding-left: 25px;
}

.wp th {
    font-weight: bold;
}

.wp {
  font-size: 13px!important;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  width: 80%;
  display: table;
}
.tba {
  font-size: 13px!important;
  border-collapse: collapse;
  border-spacing: 0;
  width: 83.5%;
  display: table;
  text-align: right;
  margin-bottom: 10px;
}
</style>
