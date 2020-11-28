<template>
  <v-footer app padless color="primary">
    <v-col class="text-center white--text" cols="12">
      {{ new Date().getFullYear() }} — <strong>Ubereat</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
};
</script>