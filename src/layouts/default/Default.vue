<template>
  <v-app>
    <home-header class="header" />
    <router-view />
    <home-footer />
  </v-app>
</template>

<script setup>
  import HomeHeader from '@/components/home/homeHeader.vue';
  import HomeFooter from '@/components/home/homeFooter.vue';
</script>

<style scoped>
.header{
  margin-top: 28px;
}
</style>