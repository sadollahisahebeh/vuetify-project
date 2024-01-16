<template>
  <div class="response-latest">
    <h1>آخرین اخبار</h1>
    <v-carousel hide-delimiter-background height="325px" show-arrows="hover">
      <v-carousel-item :key="i" v-for="i in 5">
        <v-layout>
          <v-flex :key="j" v-for="j in 5" class="ml-8">
            <div class="section-latest-news" v-for="(item,index) in getlatestnews" :key="index">
              <div class="img-latest">
                <img :src="item.image_url" alt="آخرین اخبار" width="100%" height="100%">
              </div>
              <div class="description-latest-news">
                <!-- <h2 class="text-news">با هم برای آرمان امام,نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه</h2> -->
                <p>
              {{item.title}}
                </p>
                <div class="review">
                  <div class="d-flex mt-1">
            <review class="responsive-review" color="#095195" icon="mdi-calendar" size="large" 
              label="14شهریور 1402" />
            <review class="responsive-review" color="#095195" icon="mdi-eye" size="large" icon-class="mr-2"
              label=" 234بازدید" />
          </div>
                  <button class="btn-more-information">اطلاعات بیشتر
                    <v-icon>mdi-arrow-left</v-icon>
                  </button>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup>
import review from '../review.vue';
import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  store.dispatch('getLatestNewsFromserver')
  const getlatestnews = computed(()=>{
    return store.getters.getlatestNews
  })
</script>
<style scoped>
.img-latest{
  width:270px;
}
  .section-latest-news {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 400px;
  }

  .text-news {
    font-size: 10px;
    font-weight: 700;
    color: #095195;
    margin-top: 1px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  .description-latest-news p {
    font-size: 11px;
    font-weight: 400;
    color: #555;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    margin-top: 10px;
  }
  .response-latest{
    position: relative;
  }
  .response-latest h1 {
    font-size: 15px;
    color: #095195;
    position: absolute;
    top: -30px;

  }
  .description-subject-school {
    display: flex;
    justify-content: space-between;
  }
  .review{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
  .review span{
    white-space:nowrap;
    font-size: 8px;
  }
  .btn-more-information{
    font-size: 8px;
    border: 1px solid #095195;
    border-radius: 50px;
    padding: 5px;
  }
  .responsive-review {
    font-size: 7px;
  }
  .latest{
    display: none;
  }

</style>
