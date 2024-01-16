<template>
  <v-carousel hide-delimiter-background show-arrows="hover" height="380px">
    <v-carousel-item :key="i" v-for="i in 5">
      <v-layout>
        <v-flex :key="j" v-for="j in 5" class="ml-8">
          <div class="blogs">
            <img src="/blog.png" alt="بلاگ" class="rounded-lg relative">
            <div class="description">
              <v-container>
                <div>
                  <span>۱۰ شهریور ۱۴۰۲</span>
                  <h2>آموزش زبان عربی با لحجه عراقی</h2>
                  <p class="text-blogs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                    طراحان گرافیک است،
                    چاپگرها
                    و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                    دشواری
                    موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                    اصلی،
                    و
                    جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  <div class="d-flex justify-space-between mt-2">
                    <span>
                      <v-icon size="large">mdi-eye</v-icon>
                      358بازدید

                    </span>
                    <router-link to="#" class="blog-link">ادامه مطلب
                      <v-icon>mdi-arrow-left</v-icon>
                    </router-link>
                  </div>
                </div>
              </v-container>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
</script>

<style scoped>
  .description {
    position: relative;
    background-color: #fff;
    margin-top: -20px;


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

  .text-blogs {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

</style>
