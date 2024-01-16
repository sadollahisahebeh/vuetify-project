<template>
 <v-container>
  <div class="contact-us">
   <div class="breadcrumb">
    <v-icon class="mt-4">mdi-home</v-icon>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-left"></v-icon>
      </template>
    </v-breadcrumbs>
   </div>
  </div>
    <v-row>
      <v-col cols="12" md="12">
        <div class="content">
          <h1>راه های ارتباطی با حوزه علمیه خواهران گرگان</h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، </p>
        </div>
      </v-col>
      <v-col cols="12" md="12">
        <div class="information bg-blue-darken-4">  
          <div class="mr-6">
            <h1 class="text-white">شماره تماس ها و آدرس:</h1>
          </div>
            <div class="mr-6 text-white d-flex ">
             <v-row>
              <v-col cols="6">
                <div class="d-flex text-white phone">
                <h1 class="text-white">دفتر مدیریت :</h1>
                <span class="pa-1 phone">0173246897</span>
              </div>
              </v-col>
              <v-col cols="6">
                <div class="d-flex phone">
                <h1 class="text-white">دفتر مدیریت :</h1>
                <span class="pa-1 ">0173246897</span>
              </div>
              </v-col>
             </v-row>             
            </div>
            <div class="mr-6 d-flex">
              <h1 class="text-white text-h6">آدرس :</h1>
              <span class="pa-2">گرگان -میدان پمپ بنزین -حوزه علمیه امام خینی</span>
            </div>
          </div>
      </v-col>
    </v-row>
 </v-container>
</template>

<script setup>
const   items = [
        {
          title: 'صفحه اصلی',
          disabled: false,
          href: '/',
        },
        {
          title: 'تماس با ما',
          disabled: true,
        },
      ]
</script>

<style scoped>
  .contact-us {
    display: flex;
    justify-content: space-between;
  }

  .contact-us h1 {
    font-size: 12px;
    color: #095195;
    margin-left: 10px;
    margin-right: 10px;
    padding: 3px;
  }

  .contact-us span {
    color: #095195;
  }

  a {
    color: #095195;
    text-decoration: none;
    font-size: 12px;
  }

  .date {
    display: flex;
  }

  .date span {
    font-size: 13px;
    color: #7d7d7d;
    margin-left: 15px;
  }

  .content {
    margin-top: 50px;
  }

  .content h1 {
    font-size: 24px;
    color: #095195;
  }

  .content p {
    font-size: 15px;
    margin-top: 30px;

  }

  .information {
    margin-top: 40px;
    color: #fff;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
  }
.information h1{
  font-size: 20px;
  font-weight: 600;
}
  .design-1 {
    position: absolute;
    right: 0;
    top: 0;

  }

  .design-2 {
    position: absolute;
    left: 20px;
    margin-top: -80px;

  }
.breadcrumb{
  display: flex;
  color: #095195;
  font-size: 13px;
  font-weight: 700;
}

  @media screen and (max-width:768px) {
    .date {
      display: none;
    }
    .information h1{
      font-size: 14px;
      white-space: nowrap;
    }
    .phone{
      display: flex;
      flex-direction: column;
    }
  
  }

</style>
