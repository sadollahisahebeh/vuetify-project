<template>
  <v-container>
    <div class="parent-special-news">
      <div class="special-news">
        <h1 class="mb-4 mr-5 mt-3">اخبار ویژه</h1>
      </div>
      <v-carousel hide-delimiter-background height="150px" :show-arrows="true">
        <template v-slot:prev="{ props }">
          <button @click="props.onClick" class="arrow-left">
            <v-icon>mdi-arrow-left</v-icon>
          </button>
        </template>
        <template v-slot:next="{ props }">
          <button class="arrow-right" @click="props.onClick">
            <v-icon>mdi-arrow-right</v-icon>
          </button>
        </template>
        <v-carousel-item v-for="n in 3">
          <v-container>
            <v-row>
              <v-col cols="12" xs="4" sm="6" md="4" v-for="n in 3">
                <div class="d-flex justify-wrap ga-2 mt-6" v-for="item in getnews" :key="item">
                  <div style="width: 200px;height: 100px;">
                    <img :src="item.image_url" class="rounded-lg" width="100%" height="100%" />
                  </div>
                  <div class="d-flex flex-column">
                    <div>
                      <p class="b">
                        {{ item.title }}
                      </p>
                      <div class="description-special">
                        <div>
                          <button>
                            <review color="#757575" icon="mdi-calendar" size="large" class="date"
                              :label="item.published_at" />
                          </button>
                        </div>
                        <div class="more-inform">
                          <router-link :to="`/Education/${item.id}`" class="information-link">
                            اطلاعات بیشتر
                          </router-link>
                          <v-icon color="#12122f" class="icon-information" size="sm">mdi-arrow-left</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>

</template>
<script setup>
  import {
    computed
  } from 'vue';
  import review from '../review.vue';
  import {
    useStore
  } from 'vuex';
  import moment from 'jalali-moment';
  const store = useStore();
  store.dispatch('getNewfromserver');
  const getnews = computed(() => {
    return store.getters.getnews;
  })
  const news = [{
    src: "/specialimg.png",
    description: "  گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاورد های مجتمع آموزشی  پژوهشی  تبلیغ گزارش",
  }]
  let date = moment().local('fa').format('YYY/MM')

</script>
<style scoped>
  .parent-special-news {
    background-color: #fff;
    border-top: 2px solid #56a7f3;
  }

  .special-news h1 {
    font-size: 18px;
    font-weight: 700;
    color: #095195;
  }

  .special-news p {
    font-size: 10px;
    font-weight: 400;
  }

  .date span {
    color: #757575;
    font-size: 8px;
    font-weight: 500;
  }

  .more-information span {
    font-size: 8px;
    font-weight: 500;
    color: #12122f;
  }

  a {
    text-decoration: none;
  }

  .arrow-left {
    position: absolute;
    top: 0;
    left: 30px;
  }

  .arrow-right {
    position: absolute;
    top: 0;
    left: 70px;
  }

  .b {
    font-size: 10px;
    line-height: 20px;
    text-align: justify;
  }

  .date {
    font-size: 8px;
  }

  .information-link {
    font-size: 8.56px;
    font-weight: 500;
    color: #12122f;
    position: relative;
  }

  .description-special {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .icon-information {
    position: absolute;
    margin-top: 5px;
  }

  @media (max-width:1280px) {
    .b {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
  }

</style>
