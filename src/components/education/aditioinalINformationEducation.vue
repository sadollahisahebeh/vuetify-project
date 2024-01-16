<template>
  <div class="information-user">
    <v-container>
      <v-row>
        <v-col cols="2">
          <img src="/Vector.png">
          <div class="icon-comment1 d-flex justify-center mt-4">
            <v-icon class="icon-user-responsive bg-grey-lighten-1 rounded-pill" color="white" size="large">mdi-account
            </v-icon>
          </div>
        </v-col>
        <v-col cols="10" class="comment">
          <div class="bg-grey-lighten-1 rounded-lg" height="100%">
            <v-container>
              <h1 class="name-user">علی جوادی</h1>
              <p class="about-user">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است،
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد
                نیاز، و کاربردهای متنوع با هد</p>
              <div class="idea">
                <div class="d-flex">
                  <div class="ml-4">
                    <v-icon color="green">mdi-thumb-up</v-icon>
                    <span class="text-green mr-2">۴۸</span>
                  </div>
                  <div>
                    <v-icon color="red">mdi-thumb-down</v-icon>
                    <span class="text-red mr-2">۴۸</span>
                  </div>
                </div>
                <div class="d-flex">
                  <v-icon>mdi-arrow-right-top-bold</v-icon>
                  <span class="reply">پاسخ</span>
                </div>
              </div>
            </v-container>
          </div>
        </v-col>
        <v-col cols="10" class="comment">
          <div class="d-flex">
            <div class="bg-blue-darken-3 rounded-lg">
              <div class="mt-3 bg-blue-darken-1 rounded-lg pa-3 ml-2 mr-2">
                <h1 class="name-user text-white">علی جوادی</h1>
                <p class="about-user text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                  استفاده از
                  طراحان گرافیک است،</p>
              </div>
              <div class="mt-3 pa-3">
                <h1 class="name-user text-white">ادمین سایت </h1>
                <p class="about-user text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                  مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، </p>
                <div class="idea d-flex">
                  <div class="d-flex">
                    <div class="ml-4">
                      <v-icon color="green">mdi-thumb-up</v-icon>
                      <span class="text-green mr-2">۴۸</span>
                    </div>
                    <div>
                      <v-icon color="red">mdi-thumb-down</v-icon>
                      <span class="text-red mr-2">۴۸</span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <span class="reply">پاسخ</span>
                    <v-icon>mdi-arrow-right-top-bold</v-icon>
                  </div>
                </div>
              </div>
            </div>
            <img src="/education/designcomment.png" width="auto" height="50px" class="mt-5">
          </div>
        </v-col>
        <v-col cols="2">
          <div class="icon-comment2 d-flex justify-center mt-6">
            <v-icon class="icon-user-responsive bg-blue-darken-3 rounded-pill" size="large" color="white">mdi-account
            </v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .information-user {
    background-color: #fff;
    margin-top: 30px;
    border-radius: 11px;
  }

  .name-user {
    font-size: 12px;
    color: #000000;

  }

  .about-user {
    font-size: 10px;
    color: #000000;
    line-height: 24px;
    margin-top: 10px;
    text-align: justify;
  }

  .parent-about-user {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 250px;
    height: 230px;
  }

  .reply {
    font-size: 10px;
    display: flex;
    align-items: center;
  }

  .idea {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .icon-user-responsive {
    width: 50px;
    height: 50px;
  }

  .icon-comment2 {
    margin-right: -20px;
  }

  .icon-comment1 {
    margin-left: -20px;
  }

  @media (max-width:960px) {}

</style>
