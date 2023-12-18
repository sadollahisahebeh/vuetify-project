<template>
  <div class="bg-blue-darken-4">
    <v-container>
      <div class="navbar">
        <div>
          <ul class="list-nav d-flex flex-wrap ga-8 ">
            <li v-for="(item,index) in menu" :key="index">
              <router-link to="/" class="link-menu">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="parent-logo">
          <h1 class="title-nav">حوزه علمیه خواهران</h1>
          <v-img src="/logoNav.png" alt="لوگو علمیه" class="logoNav">
          </v-img>
        </div>
      </div>
      <div class="response-nav" dir="rtl">
        <div class="d-flex ">
          <img src="/logoFooter.png" class="logo" />
          <h1>حوزه علمیه خواهران</h1>
        </div>
        <div>
          <button @click="showMenu = !showMenu">
            <v-icon>mdi-menu</v-icon>
          </button>
        </div>
      </div>
    </v-container>
  </div>
  <div class="showMenu animate__animated animate__fadeInDown" v-if="showMenu">
    <ul class="list-response-nav">
      <li v-for="(item,index) in menu" :key="index">
        <router-link to="/" class="link-response-menu">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import 'animate.css';
  const menu = [

    {
      title: "صفحه اصلی"
    },
    {
      title: " حوزه علمیه"
    },
    {
      title: " معاونت پژوهشی"
    },
    {
      title: " معاونت آموزش"
    },
    {
      title: " چند رسانه ای"
    },
    {
      title: " تماس با ما"
    },
    {
      title: " اخبار"
    },
    {
      title: " درباره ما"
    },
  ]
  const showMenu = ref(false);

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
  }

  .response-nav {
    display: none;
  }

  .showMenu {
    display: none;
  }

  @media screen and (max-width:768px) {
    .navbar {
      display: none;
    }

    .response-nav {
      display: block;
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    .logo {
      width: 24px;
      height: 24px;
    }

    .response-nav h1 {
      font-size: 9px;
      font-weight: 700;
      color: #000000;
      margin-right: 4px;
      display: flex;
      align-items: center;
    }

    .showMenu {
      display: block;
      text-align: right;
      padding: 5px;
      background-color: rgb(252, 242, 242);
      width: 100%;
      position: relative;
    }

    .link-response-menu {
      color: black;
      font-size: 10px;
      font-weight: 600;
    }

    .list-response-nav li {
      border-bottom: 1px dotted grey;
      padding: 5px;
    }

  }

</style>
