<template>
  <v-carousel hideDelimiterBackground cycle>
    <v-carousel-item v-for="n in 3">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div style="height:100%;">
              <v-img src="/banner03.png"></v-img>
            </div>
            <div class="design01">
              <v-img src="/design02.svg" width="100px" height="100px"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12">
                <div style="height: 100%;">
                  <v-img src="/banner01.png"></v-img>
                </div>
              </v-col>
              <v-col cols="12">
                <div style="height: 100%;">
                  <v-img src="/banner02.png"></v-img>
                </div>
                <div style="" class="design02">
                  <v-img src="/design01.svg" width="100px" height="100px"></v-img>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>

</script>
<style scoped>
  .design01 {
    position: absolute;
    top: -20px;
    left: 25px;
  }

  .design02 {
    position: absolute;
    bottom: -8px;
    right: 25px;
  }

  @media screen and (max-width:768px) {
    .design01 {
      display: none;
    }

    .design02 {
      display: none;
    }
  }

</style>
