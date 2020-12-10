<template>
  <div>
    <Reduction />
    <RestaurantPresentationList />
  </div>
</template>

<script>
import Reduction from "@/components/reduction.vue";
import RestaurantPresentationList from "@/components/restaurantPresentationList.vue";
export default {
  name: "Home",
  components: {
    Reduction,
    RestaurantPresentationList,
  },
};
</script>
