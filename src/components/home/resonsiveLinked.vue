<template>
 <div v-for="item in datalink.slice(0,1)">
   <v-carousel hide-delimiter-background height="200px" show-arrows="hover">
    <v-carousel-item :key="i" v-for="i in 2">
      <v-layout row>
        <v-flex :key="j" v-for="j in 2" class="ml-8">
          <v-container>
            <div class="section-link rounded-lg" >
              <div class="design-top">
                <img src="/design01.svg" alt="طراحی" width="65px" height="68px">
              </div>
              <div>
                <div>
                  <v-icon class="icon-link">mdi-link</v-icon>
                </div>
                <div class="title-link">
                  <route-link :to="item.link">{{ item.title }}</route-link>
                </div>
                <div class="des-link">
                  <span>{{ item.subtitle }}</span>
                </div>
              </div>
              <div class="design-end">
                <img src="/design02.svg" alt="طراحی" width="65px" height="68px">
              </div>
            </div>
          </v-container>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
 </div>
</template>

<script setup>
defineProps({
  datalink:Object
})
</script>

<style scoped>
  .section-link {
    background-color: #fff;
    text-align: center;
    height: 140px;
    width: 160px;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  .icon-link {
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;
    width: 33px;
    height: 33px;
    margin-top: 32px;
  }

  .title-link {
    font-size: 15px;
    font-weight: 500;
    color: #095195;
  }

  .des-link {
    font-size: 9px;
    font-weight: 400;
    color: #9a9a9a;
  }

  .design-end {
    position: absolute;
    bottom: -30px;
    left: -20px;
  }

  .design-top {
    position: absolute;
    top: -20px;
    right: -20px;
  }

  .responsive-linked {
    display: none;
  }

</style>
