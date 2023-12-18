<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <div class="section-latest-news">
          <div>
            <div class="title-latest">
              <v-img class="latest-news" src="/background.svg" width="144px">
                <h1> اطلاعیه مدرسه</h1>
              </v-img>
            </div>
            <div>
              <v-container>
                <span class="all-news"> ...همه اخبار ها</span>
              </v-container>
            </div>
          </div>
          <div v-for="n in 4">
            <information-latest-news />
            <div class="after-information-school"></div>
          </div>
        </div>
        <div class="section-latest-news">
          <div>
            <div class="title-latest">
              <v-img class="latest-news" src="/background.svg" width="144px">
                <h1>آخرین اخبار</h1>
              </v-img>
            </div>
            <div>
              <v-container>
                <span class="all-news"> ...همه اخبار ها</span>
              </v-container>
            </div>
          </div>
          <div v-for="n in 4">
            <more-visited />
            <div class="after-information-school"></div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="8">
        <div class="section-latest-news">
          <div>
            <div class="title-latest">
              <v-img class="latest-news" src="/background.svg" width="144px">
                <h1>آخرین اخبار</h1>
              </v-img>
            </div>
            <div>
              <v-container>
                <span class="all-news"> ...همه اخبار ها</span>
              </v-container>
            </div>
          </div>
          <section-latest-news />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import sectionLatestNews from './sectionLatestNews.vue';
  import informationLatestNews from './informationLatestNews.vue';
  import moreVisited from './moreVisited.vue';

</script>

<style scoped>
  .latest-news h1 {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }

  .all-news {
    font-size: 13px;
    font-weight: 400;
    color: #095195;
  }

  .title-latest {
    position: absolute;
    right: 0;
    top: -20px;
  }

  .section-latest-news {
    position: relative;
    background-color: #fff;
    margin-top: 60px;
  }

  .after-information-school {
    border: 1px dotted #9d9d9d;
    margin-top: 26px;
  }

</style>
