<template>
  <div class="ordination" v-for="item in getcategory.slice(0,3)" :key="index" :color="color">
    <div class="item-ordination">
      <router-link :to="`category_id=${item.id}`" class="link">{{ item.name }} </router-link>
    </div>
    <p>{{item.news_count}}</p>
  </div>

</template>

<script setup>
import {computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
store.dispatch('getcategoryFromServer',{num:1})
let getcategory = computed(()=>{
  return store.getters.getcategory
  })
  watch(route ,()=>{
    store.dispatch('getnewNewsFromserver',route.query.category_id)
    console.log(route.query.page);
  })
</script>

<style scoped>
a{
    text-decoration: none;
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
</style>

<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="item in getarticle" height="400px">
        <div class="blogs" >
          <div class="description">
            <v-container>
              <div>
                 <div v-if="getdetailblog">
                  <router-link :to="`/DetailBlog/category?category_id=${item.id}`" class="blog-link">ادامه مطلب
                    <v-icon>mdi-arrow-left</v-icon>
                  </router-link>
                 </div>
                </div>
            </v-container>
          </div>
        </div>
      
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
store.dispatch('getarticlefromserver');
const getarticle = computed(()=>{
  return store.getters.getarticle
})
store.dispatch('getdetailblogfromserver',{num:1})
const getdetailblog = computed(()=>{
  return store.getters.getdetailblog
})
</script>

<style scoped>
.text-blog{
  display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
}
  .description {
    position: relative;
    background-color: #fff;
    margin-top: -20px;
  }

  .description span {
    font-size: 10px;
    font-weight: 300;
    color: #9a9a9a;

  }

  .description h2 {
    font-size: 13px;
    font-weight: 700;
    color: #095195;
    margin-top: 6px;
    
  }

  .description p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 6px;
    line-height: 24px;
  }

  a {
    text-decoration: none;
  }

  .blog-link {
    font-size: 10px;
    font-weight: 400;
    color: #095195;
  }

  .instruction {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 40px;
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

  .designblog {
    width: 135px;
    height: 47px;
  }
  .responsive-blog{
    display: none;
  }
  .blogs{
    overflow: hidden;
  }
  .blogs:hover .img-blog{
    transform: scale(1.03);
    animation: flash;
    animation-duration: 1s;
  }
  .blogs:hover h2{
    font-size: 20px;
  }
  @media screen and (max-width:1280px) {
    .designblog {
      width: 100px;
      height: 35px;
    }

    .instruction {
      margin-top: 0;
    }

    .instruction h1 {
      font-size: 13px;
    }

    .instruction p {
      font-size: 9px;
    }

    .instruction {
      margin-bottom: 20px;
    }
    .blogs{
      display: none;
    }
    .responsive-blog{
      display: block;
    }

  }

</style> -->
