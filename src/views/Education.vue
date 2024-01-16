<template>
    <EducationHeader :showdata="data"/>
    <EducationBlog :showdata = "data"/>
</template>

<script setup>
import EducationHeader from '@/components/education/educationHeader.vue'
import EducationBlog from '@/components/education/EducationBlog.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route =useRoute();
const data = ref([])
axios.get(`/news/${route.params.id}`).then((res)=>{
   data.value = res.data.data.news
}).catch()

</script>