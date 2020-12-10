<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
        :src="dish.preview"
        height="200px"
    ></v-img>

    <v-card-title> {{ dish.name }} </v-card-title>

    <v-card-subtitle> {{ dish.price }}€</v-card-subtitle>

    <v-card-actions>
      <v-btn color="blue lighten-2" text> ADD TO COMMAND </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "dishesPresentationCard",
  price: "5"
}
</script>

<style scoped>

</style>