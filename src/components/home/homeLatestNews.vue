<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
       <information-school/>
    <section-sidebar-latest-news-vue/>
      </v-col>
      <v-col cols="12" sm="8">
    <parent-s-ection-latest-news/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import parentSEctionLatestNews from './parentSEctionLatestNews.vue';
  import informationSchool from './informationSchool.vue';
  import sectionSidebarLatestNewsVue from './sectionSidebarLatestNews.vue';

</script>

<style scoped>
 
</style>
