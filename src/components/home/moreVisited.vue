<template>
  <div class="section-latest-news">
    <div class="d-flex justify-space-between">
      <div class="title-latest">
        <v-img class="latest-news" src="/background.svg" width="144px">
          <h1>بیشترین بازدید</h1>
        </v-img>
      </div>
      <div>
        <span class="all-news">
          <router-link to="#"> ...همه اخبار ها</router-link>
        </span>
      </div>
    </div>
    <div class="morevisited" v-for="item in getvisited " :key="item" >
      <v-container>
        <v-row>
          <v-col cols="3">
            <div class="title-more-visited text-white" >
              <router-link :to="`/news/${item.id}`">{{ item.category.name }}</router-link>
            </div>
          </v-col>
          <v-col cols="8">
            <div class="subject-school">
              <div>
                <router-link :to="`/news/${item.id}`"  class="text-school text-black">
           {{ item.title }}
                </router-link>
              </div>
              <div class="parent-review mt-2">
                <review class="responsive-review" color="#095195" icon="mdi-calendar" size="large" icon-class="ml-2"
                  :label="changeDateshamsi`(item.published_at)`" />
                <review class="responsive-review-information" color="#095195" icon="mdi-eye" size="large"
                  icon-class="ml-2 mr-2" :label="item.views_count + ` بازدید`" />
                <review class="responsive-review" color="#095195" icon="mdi-account" size="large" icon-class="ml-2 mr-2"
                 :label="item.user.name" />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import review from '../review.vue';
import { useStore } from 'vuex';
import moment from 'jalali-moment'
import {changeDateshamsi}  from '@/assets/moment.js'
import category from '../category.vue';
import router from '@/router';
const  store = useStore();
store.dispatch('getvisitedfromserver');
const getvisited = computed(()=>{
  return store.getters.getmostvisited
 })
let m =  moment()
</script>
<style scoped>
a{
  color: #fff;
}
  .section-latest-news {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    position: relative;
    margin-top: 30px;
  }

  .title-latest {
    margin-top: -20px;
  }

  .latest-news h1 {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-top: 5px;
  }

  .all-news{
    font-size: 13px;
    font-weight: 400;
    color: #095195;
    left: 20px;
    position: absolute;
    top: 20px;
  }

  .title-more-visited {
    background-color: orangered;
    color: #fff;
    width: 60px;
    height: 30px;
    border-radius: 10px 10px 0 10px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
  }

  .subject-school {
    font-size: 10px;
    margin-right: 3px;
  }

  .description-subject-school {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  .description-subject-school span {
    font-size: 8px;
  }

  .text-school {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  .morevisited {
    border-bottom: 1px dotted grey;
    margin-top: 15px;
    height: 76px;
  }

  .morevisited:nth-last-child(1) {
    border: 0;
  }

  a {
    text-decoration: none;
    color: #095195;
  }

  .parent-review {
    display: flex;
    justify-content: space-around;
    white-space: nowrap;
  }

  .responsive-review {
    font-size: 8px;
  }

  .responsive-review-information {
    font-size: 8px;
  }

  @media (max-width:1280px) {
    .responsive-review-information {
      display: none;
    }

    .parent-review {
      display: flex;
    }

    .section-latest-news {
      margin-top: 0;
    }
  }

</style>
