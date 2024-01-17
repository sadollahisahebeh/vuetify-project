<template>
   <educationListHeader :news="news"/>
</template>
<script setup>
import educationListHeader from '@/components/EducationList/educationListHeader.vue'
defineProps({
   news:Object
})
</script>