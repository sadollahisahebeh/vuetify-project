<template>
  <v-container>
    <div class="instruction text-center">
      <img src="/design04.png" alt="طراحی" class="designblog">
      <div>
        <h1>آموزش ها</h1>
        <p>مرکز آموزش حوزه الزهرای گرگان</p>
      </div>
      <img src="/design03.svg" alt="طراحی" class="designblog">
    </div>
    <v-row>
      <v-col cols="12" md="4" v-for="item in getarticle" height="400px">
        <div class="blogs" >
         <div class="parent-img-blog">
          <img :src="`https://api-hoze.gorgon.ir/storage/${item.image}`" alt="بلاگ" class="img-blog rounded-lg relative" width="100%">
         </div>
          <div class="description">
            <v-container>
              <div>
                <span>۱۰ شهریور ۱۴۰۲</span>
                <h2 >{{ item.title }}</h2>
                <p class="text-blog">{{ item.summary }}</p>
                <div class="d-flex justify-space-between mt-8">
                  <span>{{ item.views_count + `بازدید` }}</span>
                 <div v-if="data">
                  <router-link :to="`/news/${item.id}`" class="blog-link">ادامه مطلب
                    <v-icon>mdi-arrow-left</v-icon>
                  </router-link>
                 </div>
                </div>
              </div>
            </v-container>
          </div>
        </div>
      
      </v-col>
    </v-row>
    <responsive-blogs class="responsive-blog"/>
  </v-container>
</template>
<script setup>
import { computed } from 'vue';
import responsiveBlogs from './responsiveBlogs.vue';
import { useStore } from 'vuex';
const store = useStore();
store.dispatch('getarticlefromserver');
const getarticle = computed(()=>{
  return store.getters.getarticle
})
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route =useRoute();
const data = ref([])
axios.get(`/news`).then((res)=>{
   data.value = res.data.data.news
}).catch()
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

</style>
