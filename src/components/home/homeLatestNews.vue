<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <parent-s-ection-latest-news :news="getlatestnews" />
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" sm="6" md="12">
            <information-school height="100%" />
          </v-col>
          <v-col cols="12" sm="6" md="12" order="first" order-md="2">
            <section-sidebar-latest-news-vue height="100%" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import parentSEctionLatestNews from './parentSEctionLatestNews.vue';
  import informationSchool from './informationSchool.vue';
  import sectionSidebarLatestNewsVue from './sectionSidebarLatestNews.vue';
  import {
    computed
  } from 'vue';
  import {
    useStore
  } from 'vuex';
  const store = useStore();
  store.dispatch('getLatestNewsFromserver')
  const getlatestnews = computed(() => {
    return store.getters.getlatestNews
  })

</script>

<style scoped>

</style>
