<template>
  <v-container>
    <div class="relation-box" v-if="data.length">
      <div class="relation-ship">
        <div class="d-flex">
          <div>
            <v-icon color="#095195">mdi-phone</v-icon>
          </div>
          <div class="mr-2">
            <span class="text-blue-darken-4"> {{ data[7].label }} </span>
            <!-- <span class="text-grey-darken-1"> ارتباطی</span> -->
          </div>
        </div>
        <div class="phone-relation">
          <span>{{ data[7].value }}</span>
          <!-- <span>-</span>
          <span>+989128768098</span> -->
        </div>
      </div>
      <div class="relation-ship">
        <div class="d-flex">
          <div>
            <v-icon color="#095195">mdi-email-multiple-outline</v-icon>
          </div>
          <div class="mr-2">
            <span class="text-blue-darken-4"> {{ data[6].label }} </span>
            <!-- <span class="text-grey-darken-1"> ارتباطی</span> -->
          </div>
        </div>
        <div class="phone-relation">
          <span>{{data[6].value}}</span>
        </div>
      </div>
      <div class="relation-ship">
        <div class="d-flex">
          <div>
            <v-icon color="#095195">mdi-map-marker</v-icon>
          </div>
          <div class="mr-2">
            <span class="text-blue-darken-4"> {{ data[5].label }} </span>
            <!-- <span class="text-grey-darken-1"> حوزه:</span> -->
          </div>
        </div>
        <div class="phone-relation">
          <span>{{ data[5].value }}</span>
        </div>
      </div>
    </div>
  </v-container>
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
  .relation-box {
    display: flex;
    flex-direction: column;
    gap: 20px;

  }

  .relation-ship span {
    font-size: 13px;
    font-weight: 400;
  }

  .phone-relation {
    margin-top: 10px;
    display: flex;
  }

  .phone-relation span {
    color: #848484;
    margin-left: 20px;

  }

</style>
