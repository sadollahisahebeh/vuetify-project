<template>
  <div class="section-latest-news">
    <div class="d-flex justify-space-between">
      <div class="title-latest">
        <v-img class="latest-news" src="/background.svg" width="144px">
          <h1> اطلاعیه مدرسه</h1>
        </v-img>
      </div>
      <div>
        <span class="all-news"> 
          <router-link to="#">
         همه اطلاعیه ها
          </router-link>
        </span>
      </div>
    </div>
    <div class="information-school" >
      <information-latest-news :news="getinformation" />
    </div>
  </div>
</template>

<script setup>
import informationLatestNews from './informationLatestNews.vue';
import moment from 'jalali-moment'
import { computed } from 'vue';
import { useStore } from 'vuex';
let m = moment().local('fa').format()
const store=useStore();
store.dispatch('getinformationschool')
const getinformation = computed(()=>{
  return store.getters.getinformation
})
</script>
<style scoped>
  .section-latest-news {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    position: relative;
    height: 100%;
  }

  .title-latest {
    margin-top: -20px;
  }

  .latest-news h1 {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-top: 5px;
  }

  .all-news {
    font-size: 13px;
    font-weight: 400;
    color: #095195;
    left: 20px;
    position: absolute;
    top: 20px;
  }

  .information-school {
    border-bottom: 1px dotted grey;
    padding-bottom: 15px;
    padding-top: 10px;
  }

  .information-school:nth-last-child(1) {
    border: 0;
  }
a{
  text-decoration: none;
  color: #095195;
}
</style>
