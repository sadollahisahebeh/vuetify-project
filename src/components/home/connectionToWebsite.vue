<template>
  <div class="relation-box" dir="rtl">
    <div class="relation-ship">
      <div>
        <v-icon color="#095195">mdi-phone</v-icon>
        <span class="text-blue-darken-4">شماره های </span>
        <span class="text-grey-darken-1"> ارتباطی</span>
      </div>
      <div class="phone-relation">
        <span>+989128768098</span>
        <span>-</span>
        <span>+989128768098</span>
      </div>
    </div>
    <div class="relation-ship">
      <div>
        <v-icon color="#095195">mdi-email-multiple-outline</v-icon>
        <span class="text-blue-darken-4"> ایمیل </span>
        <span class="text-grey-darken-1"> ارتباطی</span>
      </div>
      <div class="phone-relation">
        <span>www.elieh@gmail.com</span>
      </div>
    </div>
    <div class="relation-ship">
      <div>
        <v-icon color="#095195">mdi-map-marker</v-icon>
        <span class="text-blue-darken-4"> آدرس </span>
        <span class="text-grey-darken-1"> حوزه:</span>
      </div>
      <div class="phone-relation">
        <span>ایران,گرگان,خیابان شهدا</span>
      </div>
    </div>
  </div>
</template>

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
  }

  .phone-relation span {
    color: #848484;
    margin-left: 20px;

  }

</style>
