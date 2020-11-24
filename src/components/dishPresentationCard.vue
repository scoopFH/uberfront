<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="dish.picture"
      height="200px"
    ></v-img>

    <v-card-title>{{ dish.name }} </v-card-title>

    <v-card-subtitle> {{ dish.adress }} à {{ dish.city }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> RESERVE </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DishPresentationCard",
  components: {},
  props:['dish'],
  data() {
    return {
      show: false,
    };
  },
};
</script>   
