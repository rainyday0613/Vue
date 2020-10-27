<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="blue"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title align="center">My Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="menubar"></slot>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="home">홈으로 이동</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="board">게시판</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="todo">Todo List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <div>>>></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="logout">로그아웃</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-container>
      <v-content id="content">
        <slot name="content" class="font">
        </slot>
      </v-content>
    </v-container>

    <v-footer
      app
      color="blue"
      class="white--text"
    >
      <v-spacer></v-spacer>
      <span>Mini Project</span>
    </v-footer>
  </v-app>
</template>

<script>
import router from '../router'
export default {
  data: () => ({
    drawer: false,
    left: false
  }),
  methods: {
    board () {
      (window.location.pathname !== '/VuetifyBoardListPage') ? router.push('/VuetifyBoardListPage') : router.go(0)
    },
    home () {
      (window.location.pathname !== '/Main') ? router.push('/Main') : router.go(0)
    },
    game () {
      (window.location.pathname !== '/Game') ? router.push('/Game') : router.go(0)
    },
    logout () {
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    },
    todo () {
      (window.location.pathname !== '/TodoPage') ? router.push('/TodoPage') : router.go(0)
    }
  }
}
</script>
