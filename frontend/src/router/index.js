import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// For Cafe Board
import BoardRegisterPage from '../views/BoardRegisterPage.vue'
import BoardModifyPage from '../views/BoardModifyPage.vue'
import BoardReadPage from '../views/BoardReadPage.vue'

// For Login System
import SignUp from '../views/SignUp.vue'

// Vuetify

// Vuetify Board List
import VuetifyBoardListPage from '../views/VuetifyBoardListPage.vue'

// For Crawling
import Main from '../views/Main.vue'

// Game
import Game from '../views/Game'

// Board Search
import BoardSearch from '../views/BoardSearch'

// TODO
import TodoPage from '../views/TodoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board/create',
    name: 'BoardRegisterPage',
    components: {
      default: BoardRegisterPage
    }
  },
  {
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      default: BoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/board/:boardNo/edit',
    name: 'BoardModifyPage',
    components: {
      default: BoardModifyPage
    },
    props: {
      // 이 옵션을 설정하면 route.params가 컴포넌트의 props에 자동 설정됨
      default: true
    }
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    components: {
      default: SignUp
    }
  },
  {
    path: '/VuetifyBoardListPage',
    name: 'VuetifyBoardListPage',
    components: {
      default: VuetifyBoardListPage
    }
  },
  {
    path: '/Main',
    name: 'Main',
    components: {
      default: Main
    }
  },
  {
    path: '/Game',
    name: 'Game',
    components: {
      default: Game
    }
  },
  {
    path: '/BoardSearch',
    name: 'BoardSearch',
    components: {
      default: BoardSearch
    }
  },
  {
    path: '/TodoPage',
    name: 'TodoPage',
    components: {
      default: TodoPage
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
