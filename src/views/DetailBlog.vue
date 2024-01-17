<template>
 <DetailBlog :data="data"/>
 </template>
 <script setup>
 import DetailBlog from '@/components/home/detailblog.vue'
 import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route =useRoute();
const data = ref([])
axios.get(`/categories/${route.params.id}`).then((res)=>{
   data.value = res.data.data.news
}).catch()

 </script>