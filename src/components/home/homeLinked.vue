<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2" class="show-screen" v-for="item in getlink" >
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props"
        :elevation="isHovering ? 24 : 6">
          <div class="section-link">
          <div class="design-top">
            <img src="/design01.svg" alt="طراحی" width="65px" height="68px">
          </div>
          <div>
            <div>
             <router-link :to="item.link">
              <img :src="`https://api-hoze.gorgon.ir/storage/${item.image}`" class="icon-link"/>
             </router-link>
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
        </v-card>
      </v-hover>
      </v-col>
      <!-- <resonsive-linked class="responsive-linked" :datalink="getlink"/> -->
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import resonsiveLinked from './resonsiveLinked.vue';
import { useStore } from 'vuex';
 const store = useStore();
 store.dispatch('getlinkfromserver');
 const getlink = computed(()=>{
  return store.getters.getlink
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
    left: -33px;
    bottom: -27px;
  
  }

  .design-top {
    position: absolute;
    right:-20px;
    top: -20px;

  }
  .responsive-linked{
    display: none;
  }
@media screen and (max-width:1280px) {
  .show-screen{
    display: none;
  }
  .responsive-linked{
    display: block;
  }
}
</style>
