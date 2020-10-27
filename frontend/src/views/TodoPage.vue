<template>
  <div align="center">
    <todo-list align="center" list-name="2020 Todo List" />
    <Layout/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import Layout from '@/components/Layout.vue'

export default {
  name: 'TodoPage',
  components: {
    TodoList,
    Layout
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
