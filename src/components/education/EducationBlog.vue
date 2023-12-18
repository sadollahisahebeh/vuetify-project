<template>
    <v-container>
    <v-row>
      <v-col cols="12" sm="4">
    
      </v-col>
      <v-col cols="12" sm="8">
       
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  import sectionLatestNews from '@/components/home/sectionLatestNews.vue';
  import informationLatestNews from '@/components/home/informationLatestNews.vue';
  import moreVisited from '@/components/home/moreVisited.vue';

</script>

<style scoped>
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
  }

  .title-latest {
    position: absolute;
    right: 0;
    top: -20px;
  }

  .section-latest-news {
    position: relative;
    background-color: #fff;
    margin-top: 60px;
  }

  .after-information-school {
    border: 1px dotted #9d9d9d;
    margin-top: 26px;
  }

</style>
