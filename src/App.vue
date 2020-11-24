<template>
  <Navbar />
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import Reduction from '@/components/reduction.vue';
export default {
  name: "App",

  components: { 
    Navbar, 
    Reduction,
   },

  data: () => ({}),
};
</script>
