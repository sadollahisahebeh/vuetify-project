<template>
  <v-container>
    <div class="section-information d-flex justify-space-around" dir="rtl">
      <div class="calendar bg-grey-lighten-1 text-white">
        <span>02</span>
        <div class="child-calendar">آبان</div>
      </div>
      <div class="subject-school">
        <p>ساخت دومین سقاخانه امامزاده سید محمد عراق به سوریه</p>
        <div class="description-subject-school">
          <div>
            <v-icon color="#095195" class="ml-2">mdi-eye</v-icon>
            <span>بازدید ۴۸۹</span>
          </div>
          <div>
            <v-icon color="#095195" class="ml-2">mdi-calendar</v-icon>
            <span> 12شهریور ۱۴۰۱</span>
          </div>
          <div>
            <v-icon color="#095195" class="ml-2">mdi-account</v-icon>
            <span> علیرضا</span>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
  .calendar {
    position: relative;
    width: 54px;
    height: 54px;
    border-radius: 11px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  .child-calendar {
    position: absolute;
    width: 54px;
    height: 20px;
    background-color: #095195;
    border-radius: 0 0 11px 11px;
    top: 34px;
    color: #fff;
    text-align: center;
    font-size: 11px;

  }

  .subject-school {
    font-size: 10px;
    margin-top: 4px;
  }

  .description-subject-school {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    margin-right: 22px;
  }

  .description-subject-school span {
    font-size: 8px;
  }

</style>
