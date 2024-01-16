<template>
  <div class="ordination" v-for="item in getcategory.slice(0,3)" :key="index" :color="color">
    <div class="item-ordination">
      <router-link :to="`categories?category_id=item.id`" class="link">{{ item.name }} </router-link>
    </div>
    <p>{{item.news_count}}</p>
  </div>

</template>

<script setup>
import {computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
store.dispatch('getcategoryFromServer')
const getcategory = computed(()=>{
  return store.getters.getcategory
  })
 
</script>

<style scoped>
a{
    text-decoration: none;
}
.ordination {
    display: flex;
    gap: 4px;
    margin-top: 5px;
    padding: 20px;
  }

  .item-ordination {
    background-color: #f47f27;
    width: 53px;
    border-radius: 6.39px 6.39px 0 6.39px;
    text-align: center;
    color: #fff;
  }

  .link {
    color: #fff;
    font-size: 9px;
  }
</style>
