<template>
  <Main />
</template>

<script>
import Main from "@/layout/Main.vue";
import Reduction from '@/components/reduction.vue';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/'
export default {
  name: "App",
  components: { 
    Main, 
    Reduction,
   },
  data: () => ({}),
};
</script>
