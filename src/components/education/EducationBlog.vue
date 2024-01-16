<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <div class="bg-white rounded-lg" v-if="showdata">
          <v-container>
            <div v-html="showdata.body" class="text-sample text-sm">
            </div>
            <div class="d-flex">
              <div class="description-sampletext bg-blue-lighten-3 rounded-xl ">
                <div class="cycle rounded-pill"></div>
                <div>
                  <span>نویسنده : علیرضالو</span>
                </div>
              </div>
              <div class="description-sampletext mr-2 bg-blue-lighten-3 rounded-xl ">
                <div class="cycle rounded-pill"></div>
                <div>
                <span>منبع : خبرگداری سینا</span>

                </div>

              </div>
            </div>
          </v-container>
        </div>
        <register-education />
        <aditioinal-i-nformation-education class="aditional-information" />
      </v-col>
      <v-col cols="12" md="4">
        <section-sidebar-latest-news class="responsive-education-blog" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  import sectionSidebarLatestNews from '../home/sectionSidebarLatestNews.vue';
  import registerEducation from './registerEducation.vue'
  import aditioinalINformationEducation from './aditioinalINformationEducation.vue';
defineProps({
  showdata:Object
})
</script>

<style scoped>
  .send-view {
    background-color: #095195;
    color: #ffff;
  }


  .description-sampletext { 
    margin-top: 50px;
    display: flex;
    padding: 2px;
  }
  
  .description-sampletext span {
    font-size: 12px;
    color: #4d4d4d;
    white-space: nowrap;
    text-align: justify;
  }

  .cycle {
    width: 25px;
    height: 25px;
    background-color: #fff;
  }

  .responsive-education-blog{
    margin-top: 0;
  }
  .text-sample{
    text-align: justify;
  }


  @media screen and (max-width:960px) {
    .description-form {
      display: flex;
      flex-direction: column;
    }

    .responsive-education-blog {
      display: none;
    }
  }

</style>
