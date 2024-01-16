<template>
 <div v-if="news" v-for="item in news" >
  <v-container>
    <v-row>
      <v-col cols="3">
        <div class="calendar bg-grey-lighten-1 text-white">
          <span>{{day(item.publidshed_at) }}</span>
          <div class="child-calendar">{{ month(item.publidshed_at)  }}</div>
        </div>
      </v-col>
      <v-col cols="9">
        <div class="subject-school" >
        <router-link :to="`/Education/${item.id}`">
          <p class="text-school">
            {{ item.title }}
          </p>
        </router-link>
        <div class="parent-review mt-7">
            <review class="responsive-review" color="#095195" icon="mdi-calendar" size="large" icon-class="ml-2"
              :label="changeDateshamsi`(item.published_at)`" />
            <review class="responsive-review-information" color="#095195" icon="mdi-eye" size="large" icon-class="ml-2 mr-2"
              :label="item.views_count + `بازدید`" />
            <review class="responsive-review" color="#095195" icon="mdi-account" size="large" icon-class="ml-2 mr-2"
              :label="item.user.name" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
 </div>
</template>

<script setup>
import review from '../review.vue';
import {changeDateshamsi}  from '@/assets/moment.js'
import moment from 'jalali-moment';
function month(date){
  var shamsi= moment('1989/01/24', 'YYYY/MM/DD').locale('fa').format('MM')
  return shamsi
}
function day(date){
  var shamsi= moment('1989/01/24', 'YYYY/MM/DD').locale('fa').format('DD')
  return shamsi
}
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// const store=useStore();
// store.dispatch('getinformationschool')
// const getinformation = computed(()=>{
//   return store.getters.getinformation
// })
defineProps({
  news:Object
})
</script>

<style scoped>
  .calendar {
    position: relative;
    width: 54px;
    height: 54px;
    border-radius: 11px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  .child-calendar {
    position: absolute;
    width: 54px;
    height: 20px;
    background-color: #095195;
    border-radius: 0 0 11px 11px;
    top: 34px;
    color: #fff;
    text-align: center;
    font-size: 11px;

  }

  .subject-school {
    font-size: 10px;
    margin-top: 4px;
  }

  .text-school {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  a{
    text-decoration: none;
    color: #525252;
  }
.responsive-review{
  font-size: 8px;
}
.responsive-review-information{
  font-size: 8px;
}
.parent-review{
  display: flex;
  justify-content: space-around;
}
@media  (max-width:1280px) {
  .responsive-review-information{
    display: none;
  }
  .parent-review{
    display: flex;
    justify-content: space-between;
  }
}
</style>
