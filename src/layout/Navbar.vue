<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Ubereat</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        min-height="100vh"
      >
        <v-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-sheet>
    </v-card>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",

  components: {},

  data: () => ({}),
};
</script>
