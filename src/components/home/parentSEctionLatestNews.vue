<template>
  <div class="section-latest-news">
    <div class="title-latest-news">
      <div class="title-latest">
        <v-img class="latest-news" src="/background.svg" width="144px">
          <h1 class="latest">آخرین اخبار</h1>
        </v-img>
      </div>
      <div>
        <span class="all-news" v-if="getlatestnews.length">
          <router-link :to="`/news/${getlatestnews[0].id}`">
            ...همه اخبار ها
          </router-link>
        </span>
      </div>
    </div>
    <section-latest-news :news="getlatestnews"/>
  </div>
</template>

<script setup>
  import sectionLatestNews from './sectionLatestNews.vue';
  import {computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
store.dispatch('getLatestNewsFromserver')
const getlatestnews = computed(()=>{
  return store.getters.getlatestNews
  })

</script>
<style scoped>
  .section-latest-news {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    position: relative;
  }

  .title-latest {
    margin-top: -20px;
  }

  .latest-news h1 {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }

  .all-news {
    font-size: 13px;
    font-weight: 400;
    color: #095195;
    left: 20px;
    position: absolute;
    top: 20px;
  }

  a {
    text-decoration: none;
    color: #095195;

  }

  .section-latest-news {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width:768px) {
    .title-latest-news {
      display: none;
    }
 
  }

</style>
