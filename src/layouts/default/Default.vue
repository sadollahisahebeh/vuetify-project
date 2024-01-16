<template>
  <v-app>
    <div>
      <home-header />
      <!-- <header-contact v-else/> -->
    </div>
    <router-view />
    <home-footer />
  </v-app>
</template>

<script setup>
  import HomeHeader from '@/components/home/homeHeader.vue';
  import HomeFooter from '@/components/home/homeFooter.vue';
  // import {ref} from 'vue';
  // import {watch} from 'vue';
  // import { useRoute } from 'vue-router';
  // const route = useRoute();

  // const header = ref(null);
  // const show = ref(true);

  // watch(route, () => {
  //   if (route.name === 'ContactUs') {
  //     show.value = false;
  //     if (!show.value) {
  //       header.value.style.display = 'none !important'
  //     }
  //   }
  // })

</script>

<style scoped>

</style>
