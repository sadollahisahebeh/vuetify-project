<template>
     <div class="section-latest-news">
          <div>
            <div class="title-latest">
              <v-img class="latest-news" src="/background.svg" width="144px">
                <h1>آخرین اخبار</h1>
              </v-img>
            </div>
            <div>
              <v-container>
                <span class="all-news"> ...همه اخبار ها</span>
              </v-container>
            </div>
          </div>
          <section-latest-news />
        </div>
</template>

<script setup>
import sectionLatestNews from './sectionLatestNews.vue';
</script>
<style scoped>
 .section-latest-news {
    position: relative;
    background-color: #fff;
    margin-top: 60px;
  }
  .title-latest {
    position: absolute;
    right: 0;
    top: -20px;
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
  }

</style>