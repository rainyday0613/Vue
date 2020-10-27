<template>
  <div>
  <br><br>
    <h1>게시판</h1>
    <table class="tba">
      <button @click="$router.push('/board/create')">작성</button>
    </table>
    <table class="wp">
      <tr>
        <th align="center" width="15">No</th>
        <th align="center" width="500">제목</th>
        <th align="center" width="30">조회수</th>
        <th align="center" width="70">작성일</th>
        <th align="center" width="80">작성자</th>
      </tr>
      <tr v-for="page in paginatedData" :key="page.boardNo" align="center">
        <td>{{ page.boardNo }}</td>
        <td align="left">
          <router-link style="text-decoration: none; color: black" :to="{ name: 'BoardReadPage',
                  params: { boardNo: page.boardNo.toString() } }">
            {{ page.title }}
          </router-link>
        </td>
        <td>{{ page.count }}</td>
        <td>{{ page.regDate }}</td>
        <td>{{ page.writer }}</td>
      </tr>
    </table><br>
    <div class="btn-cover">
      <button :disabled="pageNum === 0"
        @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1"
        @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
    <div align="right">
      <input align="right" type="text" placeholder="작성자 검색" v-model="search" style="width: 15%">
      <button @click="find">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuetifyListPageForm',
  data () {
    return {
      pageNum: 0,
      search: ''
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: true,
      default: 10
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    },
    find () {
      this.$store.state.searchData = this.search
      console.log(this.$store.state.searchData)
      this.$router.push({ name: 'BoardSearch' })
    }
  },
  computed: {
    pageCount () {
      const listLen = this.listArray.length
      const listSize = this.pageSize

      let page = Math.floor(listLen / listSize)
      if (listLen % listSize > 0) {
        page += 1
      }

      return page
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      return this.listArray.slice(start, end)
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
