<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Reduction",
  components: {},
  data() {
    return {
      items: [
        {
          src:
            "https://www.echantillonsgratuits.fr/wp-content/uploads/2020/02/burgerking-2menus8euros.jpg",
        },
      ],
    };
  },
};
</script>