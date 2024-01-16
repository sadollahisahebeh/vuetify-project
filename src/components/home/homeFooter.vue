<template>
  <div class="relative">
    <div class="design-footer ">
      <img src="/designfooter.png" alt="طراحی">
    </div>
    <div class="bg-white">
      <div class="logo">
        <img src="/logoFooter.png" alt="لوگو" color="black">
      </div>
      <div class="footer">
        <v-container>
          <v-row>
            <v-col cols="12" md="3">
              <home-list-menu />
            </v-col>
            <v-col cols="12" md="6">
              <home-about-hoze />
            </v-col>
            <v-col cols="12" md="3">
              <home-connection-to-website />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="response-footer">
        <responsive-footer />
      </div>
    </div>
  </div>
</template>

<script setup>
  import homeConnectionToWebsite from '@/components/home/connectionToWebsite.vue'
  import homeListMenu from '@/components/home/listMenu.vue'
  import homeAboutHoze from '@/components/home/homeAboutHoze.vue'
  import responsiveFooter from '@/components/responsiveFooter.vue'

</script>

<style scoped>
  .logo {
    text-align: center;
  }

  .design-footer {
    position: relative;
    text-align: center;
    top: 8px;
  }

  .response-footer {
    display: none;
  }

  @media (max-width:960px) {
    .footer {
      display: none;
    }

    .response-footer {
      display: flex;
    }
  }

</style>
