<template>
  <v-container>
    <div class="parent-special-news">
      <div class="special-news" dir="rtl">
        <h1 class="mb-4 mr-5 mt-3">اخبار ویژه</h1>
      </div>
      <v-carousel hide-delimiter-background height="175px" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right">
        <v-carousel-item v-for="n in 3">
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <div class="d-flex justify-wrap ga-2" dir="rtl">
                  <div>
                    <img src="/specialimg.png" alt="اخبار ویژه" class="rounded-lg" />
                  </div>
                  <div class="d-flex flex-column">
                    <div>
                      <p>گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاورد های مجتمع آموزشی پژوهشی
                        تبلیغ
                        گزارش</p>
                    </div>
                    <div class="d-flex justify-space-between mt-5">
                      <div class="date">
                        <span>
                          <v-icon>mdi-calendar-range</v-icon>
                        </span>
                        <span>12شهریور 1401</span>
                      </div>
                      <router-link to="#">
                        <div class="more-information">
                          <span>اطلاعات بیشتر</span>
                          <span>
                            <v-icon>mdi-arrow-left</v-icon>
                          </span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="d-flex justify-wrap ga-2" dir="rtl">
                  <div>
                    <img src="/specialimg.png" alt="اخبار ویژه" class="rounded-lg" />
                  </div>
                  <div class="d-flex flex-column">
                    <div>
                      <p>گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاورد های مجتمع آموزشی پژوهشی
                        تبلیغ
                        گزارش</p>
                    </div>
                    <div class="d-flex justify-space-between mt-5">
                      <div class="date">
                        <span>
                          <v-icon>mdi-calendar-range</v-icon>
                        </span>
                        <span>12شهریور 1401</span>
                      </div>
                      <router-link to="#">
                        <div class="more-information">
                          <span>اطلاعات بیشتر</span>
                          <span>
                            <v-icon>mdi-arrow-left</v-icon>
                          </span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="d-flex justify-wrap ga-2" dir="rtl">
                  <div>
                    <img src="/specialimg.png" alt="اخبار ویژه" class="rounded-lg" />
                  </div>
                  <div class="d-flex flex-column">
                    <div>
                      <p>گزارش تصویری بازدید معاون آموزش حوزه های علمیه از نمایشگاه دستاورد های مجتمع آموزشی پژوهشی
                        تبلیغ
                        گزارش</p>
                    </div>
                    <div class="d-flex justify-space-between mt-5">
                      <div class="date">
                        <span>
                          <v-icon>mdi-calendar-range</v-icon>
                        </span>
                        <span>12شهریور 1401</span>
                      </div>
                      <router-link to="#">
                        <div class="more-information">
                          <span>اطلاعات بیشتر</span>
                          <span>
                            <v-icon>mdi-arrow-left</v-icon>
                          </span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>

</template>
<style>
  .parent-special-news {
    background-color: #fff;
    border-top: 2px solid #56a7f3;
  }

  .special-news h1 {
    font-size: 18px;
    font-weight: 700;
    color: #095195;
  }

  .special-news p {
    font-size: 10px;
    font-weight: 400;
  }

  .date span {
    color: #757575;
    font-size: 8px;
    font-weight: 400;
  }

  .more-information span {
    font-size: 8px;
    font-weight: 500;
    color: #12122f;
  }

  a {
    text-decoration: none;
  }

  .v-btn--icon.v-btn--density-default {
    bottom: -50px;
  }

</style>
