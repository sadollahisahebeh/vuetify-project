<template>
  <div class="section-latest-news">
    <div>
      <div class="title-latest">
        <v-img class="latest-news" src="/background.svg" width="144px">
          <h1> اطلاعیه مدرسه</h1>
        </v-img>
      </div>
      <div>
        <v-container>
          <span class="all-news"> ...همه اخبار ها</span>
        </v-container>
      </div>
    </div>
    <div v-for="n in 4">
      <information-latest-news />
      <div class="after-information-school"></div>
    </div>
  </div>
</template>

<script setup>
  import informationLatestNews from './informationLatestNews.vue';

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

  .after-information-school {
    border: 1px dotted #9d9d9d;
    margin-top: 26px;
  }

</style>
