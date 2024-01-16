<template>
  <div class="bg-blue-darken-4 mt-5">
    <v-container>
      <div class="navbar">
        <div class="parent-logo" v-if="data.length">
          <v-img :src="data[9].value" alt="لوگو علمیه" class="logoNav">
          </v-img>
          <h1 class="title-nav">حوزه علمیه خواهران</h1>
        </div>
        <div>
          <ul class="list-nav">
            <li v-for="item in getheader" :key="index">
              <router-link :to="item.link" class="link-menu">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <responsiveNav class="navbar-menu" :showdata="getheader" />
    </v-container>
  </div>
</template>

<script setup>
  import responsiveNav from './responsiveNav.vue'
  import {
    computed
  } from 'vue';
  import {
    useStore
  } from 'vuex';
  const store = useStore();
  store.dispatch('getmenusfromserver')
  const getheader = computed(() => {
    return store.getters.getMenus
  })
  import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route =useRoute();
const data = ref([])
axios.get(`/settings`).then((res)=>{
   data.value = res.data.data.settings
}).catch()

</script>

<style scoped>
  .logoNav {
    width: 61px;
    height: 61px;
  }

  .title-nav {
    font-size: 15px;
    font-weight: 700;
    margin-top: 20px;
    white-space: nowrap;

  }

  li {
    list-style: none;
  }

  .navbar {
    display: flex;
    flex-direction: wrap;
    justify-content: space-around;
  }

  .parent-logo {
    display: flex;
    justify-items: center;
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .link-menu {
    font-size: 15px;
    font-weight: 500;
  }

  .list-nav {
    margin-top: 20px;
    display: flex;
  }

  .list-nav li {
    margin-left: 15px;
    white-space: nowrap;
  }

  .navbar-menu {
    display: none;
  }

  @media screen and (max-width:960px) {
    .list-nav li {
      margin-left: 0;
    }

    .navbar {
      display: none;
    }

    .navbar-menu {
      display: block;
      justify-content: space-between;
    }
  }

</style>
