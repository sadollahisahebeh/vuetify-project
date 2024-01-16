<template>
  <div class="description-subject-school">
    <div>
      <v-icon :color="color" :class="iconClass" :size="size">{{icon}}</v-icon>
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color:"",
  iconClass:"",
  size:"" | Number,
  icon:"",
  label:"",

})
</script>

<style scoped>

</style>
