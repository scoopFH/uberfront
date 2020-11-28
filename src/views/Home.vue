<template>
  <div>
    <Reduction />
    <restaurantPresentation />
  </div>
</template>

<script>
import Reduction from "@/components/reduction.vue";
import restaurantPresentation from "@/components/restaurantPresentation";
export default {
  name: "Home",
  components: {
    Reduction,
    restaurantPresentation,
  },
};
</script>
