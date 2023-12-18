<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" md="4" v-for="n in 3">
        <div class="blogs" dir="rtl">
          <img src="/blog.png" alt="بلاگ" class="rounded-lg">
          <div class="description">
            <v-container>
              <div dir="rtl">
                <span>۱۰ شهریور ۱۴۰۲</span>
                <h2>آموزش زبان عربی با لحجه عراقی</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده،
                  شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                  الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                  دشواری
                  موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                  و
                  جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <div class="d-flex justify-space-between mt-2">
                  <span>38658بازدید</span>
                  <router-link to="#" class="blog-link">ادامه مطلب
                    <v-icon>mdi-arrow-left</v-icon>
                  </router-link>
                </div>
              </div>
            </v-container>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>

</script>

<style scoped>
  .blogs {
    position: relative;
  }

  .description {
    background-color: #fff;
    margin-top: -6px;
    width: 345px;
  }

  .description span {
    font-size: 10px;
    font-weight: 300;
    color: #9a9a9a;

  }

  .description h2 {
    font-size: 13px;
    font-weight: 700;
    color: #095195;
    margin-top: 6px;
  }

  .description p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 6px;
    line-height: 24px;
  }

  a {
    text-decoration: none;
  }

  .blog-link {
    font-size: 10px;
    font-weight: 400;
    color: #095195;
  }

</style>
