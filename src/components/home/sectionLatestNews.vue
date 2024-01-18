<template>
  <v-container>
    <div class="section-latest-news" v-for="item in news" :key="item">
        <v-row>
          <div class="show-latest d-flex ga-2 pa-2" >
          <v-col cols="12" md="4" sm="6">
            <div class="img-latest">
              <img :src="item.image_url" alt="آخرین اخبار" width="100%" height="100%">
            </div>
          </v-col>
          <v-col cols="12" md="8" sm="6">
            <div class="description-latest-news">
              <p class="title-news">
                {{ item.subtitle }} </p>
              <h2 class="text-news">
             {{item.title}}
              </h2>
              <p class="text-summary">
                {{item.summary}}
              </p>
              <div class="d-flex justify-space-between mt-4">
                <div class="d-flex mt-2">
                  <review class="responsive-review" color="#095195" icon="mdi-calendar" size="large" icon-class="ml-2"
                  :label="changeDateshamsi`(item.published_at)`"/>
                  <review class="responsive-review" color="#095195" icon="mdi-eye" size="large" icon-class="ml-2 mr-2"
                  :label="item.views_count + ` بازدید`" />
                  <review class="responsive-review" color="#095195" icon="mdi-account" size="large"
                    icon-class="ml-2 mr-2"   :label="item.user.name" />
                </div>
                <div class="more-information">
                  <router-link :to="`/Education/${item.id}`" class="btn-information">
                    اطلاعات بیشتر
                  </router-link>
                  <v-icon size="sm" class="icon-arrow">mdi-arrow-left</v-icon>
                </div>
              </div>
            </div>
          </v-col>
        </div>
        </v-row>
    </div>
    <responsivelatest-news class="responsivelatest" />
  </v-container>
</template>
<script setup>
// import {computed } from 'vue';
// import { useStore } from 'vuex';
import {changeDateshamsi}  from '@/assets/moment.js'
import review from '../review.vue';
import responsivelatestNews from './responsivelatestNews.vue';
 
// const store = useStore();
// store.dispatch('getLatestNewsFromserver')
// const getlatestnews = computed(()=>{
//   return store.getters.getlatestNews
//   })

defineProps({
    news:Object
  })
</script>
<style scoped>
a{
  text-decoration: none;
  color: #000;
}
  .section-latest-news {
    display: flex;
    gap: 31px;
    margin-top: 30px;
    border-bottom: 1px dashed lightgrey;
  }
.section-latest-news:nth-last-child(2){
  border-bottom: none;
}
  .title-news {
    font-size: 10px;
    font-weight: 400;
    color: #8a8a8a;
  }

  .text-news {
    font-size: 13px;
    font-weight: 700;
    color: #095195;
    margin-top: 8px;
  }

  .description-latest-news p {
    font-size: 11px;
    font-weight: 400;
    color: #555;
    margin-top: 6px;
  }

  .date {
    margin-top: 8px;
  }

  .date span {
    font-size: 9px;
    font-weight: 400;
    color: #757575;
  }
  .more-information{
    display: flex;
    justify-content: space-around;
    border: 1px solid #095195;
    border-radius: 20px;
    width: 96px;
    padding:5px;
    margin-top: 5px;
  }

  .btn-information {
    font-size: 9px;
    font-weight: 400;  
  }
  .more-information:hover {
    background-color: #095195;
    color: #fff;
  }
  .more-information:hover .btn-information{
    color: #fff;
  }

  .icon-arrow {
    margin-right: 4px;
    
  }

  .responsivelatest {
    display: none;
  }

  .responsive-review {
    font-size: 9px;
  }

  .img-latest {
    overflow: hidden;
  }

  .img-latest:hover img {
    transform: scale(1.05);
    animation: flash;
    animation-duration: 1s;
  }
  .text-summary{
    font-size: 11px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }


  @media screen and (max-width:1280px) {
    .section-latest-news {
      display: flex;
      flex-direction: column;
    }

    .img-latest {}
  }

  @media screen and (max-width:768px) {
    .section-latest-news {
      display: none;
    }

    .img-latest {
      display: flex;
      justify-content: center;
    }

    .text-news {
      font-size: 10px;
    }

    .section-latest-news {
      gap: 20px;
    }

    .responsivelatest {
      display: block;
    }
  }

</style>
