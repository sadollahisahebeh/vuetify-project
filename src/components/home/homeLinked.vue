<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="2" v-for="n in 6">
        <div class="section-link">
          <div class="design">
            <img src="/design02.svg" alt="طراحی">
          </div>
          <div>
            <div>
              <v-icon class="icon-link">mdi-link</v-icon>
            </div>
            <div class="title-link">
              <route-link to="#">پیوندها</route-link>
            </div>
            <div class="des-link">
              <span>محتواهای سازمان های مختلف</span>
            </div>
          </div>
          <div class="design-end">
            <img src="/design01.svg" alt="طراحی">
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
  .section-link {
    background-color: #fff;
    text-align: center;
    height: 140px;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  .icon-link {
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;
    width: 33px;
    height: 33px;
    margin-top: 32px;
  }

  .title-link {
    font-size: 15px;
    font-weight: 500;
    color: #095195;
  }

  .des-link {
    font-size: 9px;
    font-weight: 400;
    color: #9a9a9a;
  }

  .design {
    position: absolute;
    top: -50px;
    left: -50px;
  }

  .design-end {
    position: absolute;
    right: -50px;
    bottom: -55px;
  }

</style>
