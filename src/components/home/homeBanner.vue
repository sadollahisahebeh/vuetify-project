<template>
  <div class="relative mt-8">
    <v-container>
      <div v-if="getsliders.length">
        <v-row>
          <v-col cols="12" md="6">
            <div class="banner03">
              <div class="dark">
                <router-link :to="`/news/${getsliders[0].id}`">
                  <v-img class="img-banner" :src="getsliders[0].image_url"></v-img>
                </router-link>
              </div>
              <div class="design01">
                <v-img src="/design01.svg" width="100px" height="100px"></v-img>
              </div>
              <div>
                <div class="description">
                  <div class="title-more-visited ">هنری</div>
                  <div class="d-flex flex-column ga-2">
                    <h1>عید مبعث</h1>
                    <p>
                      {{ getsliders[0].title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12">
                <div class="banner01">
                  <router-link :to="`/news/${getsliders[1].id}`">
                    <v-img class="img-banner" :src="getsliders[1].image_url"></v-img>
                  </router-link>
                  <div class="description-banner01">
                    <div class="title-more-visited">هنری</div>
                    <div class="d-flex flex-column ga-2">
                      <h1>عید مبعث</h1>
                      <p>
                        {{ getsliders[1].title }}
                      </p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="banner02">
                  <router-link :to="`/news/${getsliders[2].id}`">
                    <v-img class="img-banner" :src="getsliders[2].image_url"></v-img>
                  </router-link>
                  <div class="design02">
                    <v-img src="/design02.svg" width="100px" height="100px"></v-img>
                  </div>
                  <div class="description">
                    <div class="title-more-visited ">هنری</div>
                    <div class="d-flex flex-column ga-2">
                      <h1>عید مبعث</h1>
                      <p>
                        {{ getsliders[2].title }}
                      </p>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
  import 'animate.css'
  import { computed } from 'vue';
  import {  useStore} from 'vuex';
  const store = useStore();
  store.dispatch('getSlidersfromserver');
  const getsliders = computed(() => {
    return store.getters.getsliders
  })

</script>
<style scoped>
  .banner03 {
    position: relative;
  }

  .design01 {
    position: absolute;
    top: -40px;
    right: -40px;
  }

  .banner01 {
    position: relative;
  }

  .banner02 {
    position: relative;
  }

  .design02 {
    position: absolute;
    bottom: -40px;
    left: -40px;
  }

  .title-more-visited {
    background-color: orangered;
    color: #fff;
    width: 57px;
    height: 22px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }

  .description {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 8px;
    bottom: 11px;
    right: 22px;
  }

  .description h1 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }

  .description p {
    font-size: 13px;
    font-weight: 400;
    color: #fff;
  }

  .description-banner01 {
    position: absolute;
    bottom: 11px;
    right: 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .description-banner01 h1 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }

  .description-banner01 p {
    font-size: 13px;
    font-weight: 400;
    color: #fff;
  }

  .img-banner {
    border-radius: 10px;
  }

  @media screen and (max-width:960px) {
    .design01 {
      display: none;
    }

    .design02 {
      display: none;
    }
  }

</style>
