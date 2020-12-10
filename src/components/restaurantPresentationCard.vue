<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="restaurant.picture" height="200px"></v-img>

    <v-card-title> {{ restaurant.name }} </v-card-title>

    <v-card-subtitle> {{ restaurant.adress }} à {{ restaurant.city }} </v-card-subtitle>

    <v-card-actions>
      <router-link to="{name:'dishesDisponibility', params:{category:'...'}},">
        RESERVE
      </router-link>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  watch: {},
  name: "RestaurantPresentationCard",
  components: {},
  props: ["dish"],
  data() {
    return {};
  },
};
</script>   
