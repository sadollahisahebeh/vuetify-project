<template>
  <div dir="rtl">
    <home-slider class="banner-slider" />
    <home-special-news class="special-news" />
    <homeLatestNewsVue class="latest-news" />
    <homeLinkedVue class="linked" />
    <div class="instruction text-center">
      <img src="/design04.png" alt="طراحی">
      <div>
        <h1>آموزش ها</h1>
        <p>مرکز آموزش حوزه الزهرای گرگان</p>
      </div>
      <img src="/design03.svg" alt="طراحی">
    </div>
    <home-blogs class="blogs " />
  </div>
</template>

<script setup>
  import homeLatestNewsVue from '@/components/home/homeLatestNews.vue';
  import homeSlider from '@/components/home/homeSlider.vue';
  import HomeSpecialNews from '@/components/home/homeSpecialNews.vue';
  import homeLinkedVue from '@/components/home/homeLinked.vue';
  import homeBlogs from '@/components/home/homeBlogs.vue'

</script>

<style scoped>
  .banner-slider {
    margin-top: 80px;
  }

  .special-news {
    margin-top: 90px;
  }

  .latest-news {
    margin-top: 70px;
  }

  .linked {
    margin-top: 90px;
  }

  .blogs {
    margin-top: 39px;
    margin-bottom: 75px;
  }

  .instruction {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .instruction h1 {
    font-size: 22px;
    font-weight: 700;
  }

  .instruction p {
    font-size: 13px;
    font-weight: 400;
    color: #3a3737;
  }

  @media screen and (max-width:768px) {
    .banner-slider {
      margin-top: 20px;
    }
  }

</style>
