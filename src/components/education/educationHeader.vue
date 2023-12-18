<template>
  <v-container>
    <div>
      <div class="header" dir="rtl">
        <span>صفحه اصلی </span>
        <span>></span>
        <span> آموزش </span>
        <span>></span>
        <span>صفحه آموزش </span>
      </div>
      <div class="bg-white rounded-lg mt-12 education-main">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-img src="/education/educationimg.png"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div dir="rtl">
                <h1>با هم برای آرمانِ امام ، نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه</h1>
                <div class="bg-grey-lighten-3 rounded-lg mt-5 ">
                  <v-container>
                    <p dir="rtl">ایشان شرط دوم رقابت سالم در انتخابات را، حضور همراه با بصیرت و با فکرِ مردم و انتخاب
                      افراد صالح
                      دانستند و افزودند: باید افرادی را برگزید که بعد اشور را به دشمن نمی فروشند، مصالح ملی را به دلیل
                      رودربایستی زیر پا نمی گذارند.</p>
                  </v-container>

                </div>
                <div class="d-flex mt-10 date">
                  <div>
                    <v-icon color="#095195">mdi-calendar</v-icon>
                    <span> 12شهریور1401</span>
                  </div>
                  <div>
                    <v-icon color="#095195">mdi-eye</v-icon>
                    <span> بازدید 23457</span>
                  </div>
                  <div>
                    <v-icon color="#095195">mdi-account</v-icon>
                    <span> علیرضا</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
  .header {
    display: flex;
    gap: 8px;
    margin-top: 50px;
  }

  .header span {
    font-size: 12px;
    color: #095195;
  }

  .education-main h1 {
    font-size: 24px;
    font-weight: 700;
    color: #095195;
    margin-top: 50px;
  }

  .education-main p {
    font-size: 13px;
    line-height: 29px;
  }

  .date span {
    font-size: 13px;
    margin-left: 20px;
    color: #757575;
  }

</style>
