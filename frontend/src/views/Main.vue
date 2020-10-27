<template>
 <div id="app">
  <v-app id="inspire">
    <v-row>
      <v-col cols="12" sm="5" offset-sm="3">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="n in 9"
                :key="n"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
  <Layout/>
</div>
</template>

<script>
import Layout from '../components/Layout'
/* import BoardListPageForm from '../components/BoardListPageForm' */
import router from '../router'

export default {
  components: { Layout },
  computed: {
  },
  methods: {
    board () {
      (window.location.pathname !== '/VuetifyBoardListPage') ? router.push('/VuetifyBoardListPage') : router.go(0)
    }
  }
}
</script>
