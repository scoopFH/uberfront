<template>
  <div>
    <Reduction />
    <DishesPresentation />
  </div>
</template>

<script>
import Reduction from "@/components/reduction.vue";
import DishesPresentation from "@/components/dishesPresentation.vue";
export default {
  name: "Home",
  components: {
    Reduction,
    DishesPresentation,
  },
};
</script>
