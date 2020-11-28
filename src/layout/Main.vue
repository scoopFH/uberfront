<template>
  <v-app>
    <NavBar />

    <v-main>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/footer.vue";
import NavBar from "@/components/navBar.vue";
export default {
  name: "Main",

  components: {
    Footer,
    NavBar,
  },

  data: () => ({}),
};
</script>
