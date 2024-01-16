<template>
  <div class="about-hoze" v-if="data.length">
    <h1>{{ data[11].value }}</h1>
    <p class="pa-6" v-if="data[10].value">
     {{data[10].value}}
    </p>
    <div class="icon-social">
      <router-link :to="data[12].value">
        <v-icon color="#a3a3a3">mdi-facebook</v-icon>
      </router-link>
      <router-link :to="data[13].value">
        <v-icon color="#a3a3a3">mdi-instagram</v-icon>
      </router-link>
      <router-link :to="data[14].value">
        <v-icon color="#a3a3a3">mdi-twitter</v-icon>
      </router-link>
      <router-link :to="data[15].value">
        <v-icon color="#a3a3a3">mdi-whatsapp</v-icon>
      </router-link>
      <router-link :to="data[12].value">
        <v-icon color="#a3a3a3">mdi-linkedin</v-icon>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import {
    ref
  } from 'vue';
  import {
    useRoute
  } from 'vue-router';
  const route = useRoute();
  const data = ref([])
  axios.get(`/settings`).then((res) => {
    data.value = res.data.data.settings
  }).catch()

</script>

<style scoped>
  .about-hoze h1 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;

  }

  .about-hoze {
    text-align: center;
  }

  .about-hoze p {
    font-size: 10px;
    font-weight: 400;
    color: #7a7a7a;
    line-height: 28px;
    text-align: justify;

  }

  .icon-social {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
  }
@media (max-width:1280px) {
  .icon-social{
    display: none;
  }
}
</style>
