<template>
  <div class="d-flex flex-column ga-8">
    <home-banner/>
    <home-special-news />
    <homeLatestNewsVue />
    <homeLinkedVue />
    <home-blogs />
  </div>
</template>

<script setup>
  import homeLatestNewsVue from '@/components/home/homeLatestNews.vue';
  import homeBanner from '@/components/home/homeBanner.vue';
  import HomeSpecialNews from '@/components/home/homeSpecialNews.vue';
  import homeLinkedVue from '@/components/home/homeLinked.vue';
  import homeBlogs from '@/components/home/homeBlogs.vue'

</script>

<style scoped>

</style>
