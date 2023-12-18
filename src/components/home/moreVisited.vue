<template>
  <v-container>
    <div class="section-information d-flex justify-space-around" dir="rtl">
      <div class="title-more-visited">
        <span>هنری</span>
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

<style scoped>
  .title-more-visited {
    background-color: orangered;
    color: #fff;
    width: 60px;
    height: 30px;
    border-radius: 10px 10px 0 10px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
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
