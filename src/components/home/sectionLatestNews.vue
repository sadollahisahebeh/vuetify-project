<template>
  <v-container>
    <div class="section-latest-news" dir="rtl" v-for="n in 5">
      <div class="img-latest">
        <img src="/imglatestnews.png" alt="آخرین اخبار">
      </div>
      <div class="description-latest-news">
        <p class="title-news">این متن فاقد اهمیت است و جهت پر کردن فضای بالای عنوان است.</p>
        <h2 class="text-news">با هم برای آرمان امام,نشست هم اندیشی پیرامون وحدت حوزه و دانشگاه</h2>
        <p>شاخه دانشجویی بسیج مدرسه علمیه معصومیه(س) برگزار می کند: حلقه سوم با هم برای آرمانِ امام نشست هم اندیشی
          پیرامون "وحدت حوزه و دانشگاه" با حضور مسولین تشکل های دانشجویی استان قم و طلاب مدرسه علمیه معصومیه(س) ...</p>
        <div class="d-flex justify-space-between">
          <div class="d-flex ga-4">
            <div class="date">
              <span>
                <v-icon>mdi-calendar-range</v-icon>
              </span>
              <span>12شهریور 1401</span>
            </div>
            <div class="date">
              <span>
                <v-icon>mdi-eye</v-icon>
              </span>
              <span> 14043 بازدید</span>
            </div>
            <div class="date">
              <span>
                <v-icon>mdi-account</v-icon>
              </span>
              <span> علیرضا</span>
            </div>
          </div>
          <div>
            <v-btn class="btn-information rounded-xl" variant="text">
              اطلاعات بیشتر
              <v-icon class="icon-arrow">mdi-arrow-left</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
  .section-latest-news {
    display: flex;
    gap: 31px;
    margin-top: 35px;
  }

  .title-news {
    font-size: 10px;
    font-weight: 400;
    color: #8a8a8a;
  }

  .text-news {
    font-size: 15px;
    font-weight: 700;
    color: #095195;
    margin-top: 1px;
  }

  .description-latest-news p {
    font-size: 11px;
    font-weight: 400;
    color: #555;
    margin-top: 6px;
  }

  .date {
    margin-top: 8px;
  }

  .date span {
    font-size: 9px;
    font-weight: 400;
    color: #757575;
  }

  .btn-information {
    font-size: 9px;
    font-weight: 400;
    border: 1px solid #095195;
  }

  .icon-arrow {
    margin-right: 4px;
  }

  @media screen and (max-width:768px) {
    .section-latest-news {
      display: flex;
      flex-direction: column;
    }

    .img-latest {
      display: flex;
      justify-content: center;
    }

  }

</style>
