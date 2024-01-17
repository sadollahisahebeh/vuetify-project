<template>
    <v-container>
      <div class="education-list">
        <div class="breadcrumb">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-left"></v-icon>
            </template>
          </v-breadcrumbs>
        </div>
       <v-row>
        <v-col cols="6" md="3">
          <button class="more-btn" @click="showMore = !showMore">بیشترین بازدید</button>
        </v-col>
        <v-col cols="6" md="3">
          <button class="more-btn" @click="showOrdination = !showOrdination"> دسته بندی اخبار</button>
        </v-col>
       </v-row>
        <v-row>
          <v-col cols="12" md="8" order="last" order-md="first">
            <div class="title-more-review">پربازدیدترین ها</div>
            <section-latest-news  class="bg-white rounded-lg mt-7" />
            <div class="pagination" dir="ltr">
              <v-pagination :length="3" v-model="page" color="#095195" prev-icon="mdi-menu-right" next-icon="mdi-menu-left">
              </v-pagination>
            </div>
          </v-col>
          <v-col cols="12" md="4" order="first" order-md="last">
            <div class="response-visit">
              <div class="parent-search bg-white rounded-lg">
                <input type="text" placeholder="جستجو کنید..." class="search">
                <v-icon color="#7d7d7d" class="icon-search">mdi-magnify</v-icon>
              </div>
            <div class="category" :class="{showOrdination}">
              <div class="title-latest">
                <v-img class="latest-news" src="/background.svg" width="144px">
                  <h2 class="latest">دسته بندی اخبار</h2>
                </v-img>
              </div>
              <div class="bg-white d-flex pa-4 justify-space-around mt-8 rounded-lg">
                  <div v-for="item in data">
                    <category/>
                  </div>
              </div>
            </div>
              <more-visited class="more-visited" :class="{showMore}" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script setup>
    import sectionLatestNews from '../home/sectionLatestNews.vue';
    import moreVisited from '../home/moreVisited.vue';
    import category from '../category.vue'
    import {
      ref
    } from 'vue';
    const showMore = ref(false);
    const showOrdination = ref(false)
    const items = [{
        title: 'صفحه اصلی',
        disabled: false,
        href: '/',
      },
      {
        title: 'اخبار ',
        disabled: true,
      },
    ]
    const page = ref(1)
   
  // import {computed } from 'vue';
  // import { useStore } from 'vuex';
  // const store = useStore();
  // store.dispatch('getcategoryFromServer')
  // const getcategory = computed(()=>{
  //   return store.getters.getcategory
  //   })
  defineProps({
    data:Object
  })
    
  
  </script>
  
  <style scoped>
    .title-latest {
      position: absolute;
      margin-top: -20px;
    }
  
    .latest-news h2 {
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      text-align: center;
      margin-top: 5px;
    }
  
    .education-list {
      position: relative;
    }
  
    .education-list h1 {
      font-size: 12px;
      color: #095195;
      margin-left: 10px;
    }
  
    .education-list span {
      color: #095195;
    }
  
    a {
      color: #095195;
      text-decoration: none;
      font-size: 12px;
    }
  
    .search {
      border: 1px solid #095195;
      border-radius: 30px;
      width: 100%;
      height: 32px;
      padding: 8px;
      outline: none;
      background-color: rgb(237, 237, 241);
    }
  
    .parent-search {
      height: 48px;
      padding: 8px;
      position: relative;
      margin-top: 27px;
    }
  
    .icon-search {
      position: absolute;
      left: 13px;
      top: 13px;
    }
  
    .pagination {
      margin-top: 50px;
    }
  
    .title-more-review {
      display: none;
    }
  
    .more-btn {
      display: none;
    }
  
    .v-btn--icon .v-icon {
      direction: rtl;
    }
  
    .breadcrumb {
      display: flex;
      color: #095195;
      font-size: 13px;
      font-weight: 700;
    }
  
    .more-visited {
      margin-top: 30px
    }
  
    .ordination {
      display: flex;
      gap: 4px;
      margin-top: 5px;
      padding: 20px;
    }
  
    .item-ordination {
      background-color: #f47f27;
      width: 53px;
      border-radius: 6.39px 6.39px 0 6.39px;
      text-align: center;
      color: #fff;
    }
  
    .link {
      color: #fff;
      font-size: 9px;
    }
  .show-ordination{
    display: flex;
  }
    @media screen and (max-width:960px) {
    .category{
      display: none;
      &.showOrdination{
        display: block;
        animation: fadeInDown;
          animation-duration: 2s;
      }
    }
      .parent-search {
        display: none;
      }
  
      .title-more-review {
        background-color: #095195;
        border-radius: 30px;
        color: #fff;
        padding: 8px;
        text-align: center;
        margin-top: 40px;
      }
  
      .more-btn {
        display: block;
        margin-top: 30px;
        width: 100%;
        color: #fff;
        background-color: #095195;
        height: 36px;
        border-radius: 7px;
        font-size: 10px;
        font-weight: 700;
  
      }
  
      .more-visited {
        height: 0;
        overflow: hidden;
        margin-top: 0;
  
        &.showMore {
          height: auto;
          overflow: visible;
          text-align: center;
          margin-top: 30px;
          animation: fadeInDown;
          animation-duration: 2s;
  
        }
      }
  
    }
  
  </style>
  