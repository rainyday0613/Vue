<template>
  <div align="center" class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div>
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div>
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
import CreateTodo from '@/components/CreateTodo.vue'

export default {
  props: {
    listName: String
  },
  data () {
    return {
      todos: [
      ]
    }
  },
  methods: {
    addTodo (newTodo) {
      this.todos.push({ description: newTodo, completed: false })
    },
    toggleTodo (todo) {
      todo.completed = !todo.completed
    },
    deleteTodo (deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo)
    },
    editTodo (todo, newTodoDescription) {
      todo.description = newTodoDescription
    }
  },
  components: { Todo, CreateTodo }
}
</script>

<style scoped lang="scss"></style>
