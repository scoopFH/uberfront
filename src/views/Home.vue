<template>
  <div>
    <Reduction />
    <RestaurantPresentation />
  </div>
</template>

<script>
import Reduction from "@/components/reduction.vue";
import RestaurantPresentation from "@/components/restaurantPresentation.vue";
export default {
  name: "Home",
  components: {
    Reduction,
    RestaurantPresentation,
  },
};
</script>
