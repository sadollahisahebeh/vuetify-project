<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <home-about-hoze />
      </v-col>
      <v-col cols="12" md="3">
        <v-container>
          <div class="parent-useful">
          <div class="title-useful">
            <h1>لینک های </h1>
            <h2>مفید</h2>
          </div>
          <div>
            <ul class="useful">
              <li v-for="(item,index) in useful" :key="index">
                <router-link to="/">{{ item.list }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="services">
          <div class="title-useful">
            <h1> خدمات </h1>
            <h2>ما</h2>
          </div>
          <div>
            <ul class="list-services">
              <li v-for="(item,index) in services" :key="index">
                <router-link to="/">{{ item.list }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="connetion-number">
          <div class="title-connection">
            <h1> راه های </h1>
            <h2>ارتباطی</h2>
          </div>
          <div class="d-flex justify-space-between ml-4">
            <div>
              <div class="des-connect ">
                <v-icon color="#095195" size="sm">mdi-phone</v-icon>
                <h1>شماره های</h1>
                <h2>ارتباطی</h2>
              </div>
              <div class="phone">
                <span>+09869876546</span>
                <span>-</span>
                <span>+09869876546</span>
              </div>
            </div>
            <div>
              <div class="des-connect">
                <v-icon color="#095195" size="sm">mdi-phone</v-icon>
                <h1>ایمیل های</h1>
                <h2>ارتباطی</h2>
              </div>
              <div class="phone">
                <span>sajedi7689@gmail.com</span>

              </div>
            </div>
          </div>
          <div class="d-flex justify-space-between ml-4">
            <div class="location">
              <div class="des-connect ">
                <v-icon color="#095195" size="sm">mdi-map-marker</v-icon>
                <h1> آدرس</h1>
                <h2>حوزه:</h2>
              </div>
              <div class="phone">
                <span>ایران تهران -منطقه الهیه.زرین دوم پلاک۷</span>
              </div>
            </div>
            <div class="icon-social">
              <div class="d-flex ga-8">
                <router-link to="#">
                  <v-icon color="#a3a3a3">mdi-facebook</v-icon>
                </router-link>
                <router-link to="#">
                  <v-icon color="#095195">mdi-instagram</v-icon>
                </router-link>
                <router-link to="#">
                  <v-icon color="#a3a3a3">mdi-facebook</v-icon>
                </router-link>
              </div>
              <div class="d-flex ga-8">
                <router-link to="#">
                  <v-icon color="#a3a3a3">mdi-twitter</v-icon>
                </router-link>
                <router-link to="#">
                  <v-icon color="#a3a3a3">mdi-whatsapp</v-icon>
                </router-link>
                <router-link to="#">
                  <v-icon color="#a3a3a3">mdi-linkedin</v-icon>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <p class="shetab">طراحی شده توسط شتاب</p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  import homeAboutHoze from '@/components/home/homeAboutHoze.vue'
  const useful = [{
      list: "صفحه اصلی"
    },
    {
      list: " حوزه مدیریت"
    },
    {
      list: " معاونت پژوهشی"
    },
    {
      list: " معاونت آموزش "
    },

  ]
  const services = [{
      list: "تماس با ما"
    },
    {
      list: "اخبار "
    },
    {
      list: "تماس با ما"
    },
  ]

</script>
<style scoped>
  .parent-useful {
    display: flex;
    color: #7a7a7a;
  }

  .parent-useful h1 {
    font-size: 11px;
    white-space: nowrap
  }

  .parent-useful h2 {
    font-size: 11px;
  }

  .useful {
    display: flex;
    gap: 8px;

  }

  a {
    text-decoration: none;
    color: #7a7a7a;
  }

  li {
    list-style: none;
    white-space: nowrap;
    font-size: 10px;
  }

  .title-useful {
    display: flex;
    gap: 4px;
    margin-top: 1PX;
  }

  .title-useful h1 {
    border-bottom: 2px solid #095195;
  }

  .title-useful h2 {
    border-bottom: 2px solid #1BA4AA;
  }

  .useful {
    border-bottom: 2px solid #1BA4AA;
    padding-bottom: 10px;
  }

  .services {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 3px;
  }

  .services h1 {
    font-size: 11px;
    color: #7a7a7a;
  }

  .services h2 {
    font-size: 11px;
    color: #7a7a7a;
  }

  .title-connection {
    display: flex;
    gap: 4px;
  }

  .title-connection h1 {
    font-size: 11px;
    color: #095195;
    border-bottom: 2px solid #095195;
    white-space: nowrap;
  }

  .title-connection h2 {
    font-size: 11px;
    color: #7a7a7a;
    border-bottom: 2px solid #1BA4AA;
    padding-bottom: 4px;
  }

  .list-services {
    display: flex;
    gap: 4px;
    border-bottom: 2px solid #1BA4AA;
    padding-bottom: 8px;

  }

  .des-connect {
    display: flex;
    margin-top: 20px;
  }

  .des-connect h1 {
    font-size: 11px;
    color: #095195;
  }

  .des-connect h2 {
    font-size: 11px;
    color: #7a7a7a;
  }

  .phone {
    font-size: 10px;
    color: #7a7a7a;
    margin-top: 10px;
  }

  .phone span {
    font-size: 9px;
  }

  .location {
    margin-top: 30px;
  }

  .icon-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
  }

  .shetab {
    font-size: 9px;
  }

</style>
