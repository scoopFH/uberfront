<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="dish.preview"
      height="200px"
    ></v-img>

    <v-card-title> {{ dish.name }} </v-card-title>

    <v-card-subtitle> {{ dish.adress }} à {{ dish.city }} </v-card-subtitle>

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
