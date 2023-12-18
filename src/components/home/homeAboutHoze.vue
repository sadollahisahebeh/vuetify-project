<template>
  <div class="about-hoze ">
    <h1>حوزه علمیه خواهران گرگان</h1>
    <p>لورم ایپسوم متن ساختگی با تلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
      تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
      طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
      امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
      حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </p>
    <div class="icon-social">
      <router-link to="#">
        <v-icon color="#a3a3a3">mdi-facebook</v-icon>
      </router-link>
      <router-link to="#">
        <v-icon color="#a3a3a3">mdi-instagram</v-icon>
      </router-link>
      <router-link to="#">
        <v-icon color="#a3a3a3">mdi-twitter</v-icon>
      </router-link>
      <router-link to="#">
        <v-icon color="#a3a3a3">mdi-whatsapp</v-icon>
      </router-link>
      <router-link to="#">
        <v-icon color="#a3a3a3">mdi-linkedin</v-icon>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .about-hoze h1 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;

  }

  .about-hoze {
    text-align: center;
  }

  .about-hoze p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 25px;
    color: #7a7a7a;
    line-height: 28px;

  }

  .icon-social {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }

</style>
