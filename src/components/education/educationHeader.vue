<template>
  <v-container>
    <div>
      <div class="breadcrumb">
        <v-icon class="mt-4">mdi-home</v-icon>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <div class="education-main" v-if="showdata">
        <v-row>
          <v-col cols="12" md="7">
            <div class="description-img-response">
              <div class="d-flex">
                <div class="cycle-response"
                  style="width: 10px;height: 10px;background-color: #8dd4da; border-radius: 50%;margin-top: 10px;">
                </div>
                <span class="description-img">این متن فاقد اهمیت است و جهت پر کردن فضای بالای عنوان است.
                </span>
              </div>
              <h1 >
                {{ showdata.title }}
              </h1>
              <div class="bg-grey-lighten-3 rounded-lg mt-5 pa-3 ">
                <p>
                  {{showdata.summary}}
                </p>
              </div>
              <div class="review">
                <review class="icon-size" icon-class="ml-2" color="#095195" icon="mdi-calendar" size="large"
                  label="12شهریور 1402" />
                <review class="icon-size" icon-class="ml-2" color="#095195" icon="mdi-eye" size="large"
                  label="بازدید 1402" />
                <review class="icon-size" icon-class="ml-2" color="#095195" icon="mdi-account" size="large"
                  label=" علیرضالو" />
              </div>
              <div class="review-response">
                <review class="icon-size" icon-class="ml-2" color="#7a7a7a" icon="mdi-eye" size="large"
                  label="بازدید 1402" />
                <review class="icon-size" icon-class="ml-2" color="#7a7a7a" icon="mdi-account" size="large"
                  label=" علیرضالو" />
                <review class="icon-size" icon-class="ml-2" color="#7a7a7a" size="large" label="12شهریور 1402" />
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" order="first" order-md="2">
            <div>
              <v-img :src="showdata.image_url"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script setup>
  import review from '../review.vue';
  defineProps({
    showdata: Object
  })
  const items = [{
      title: 'صفحه اصلی',
      disabled: false,
      href: '/',
    },
    {
      title: 'اخبار',
      disabled: true,
    },
  ]

</script>

<style scoped>
  .breadcrumb {
    display: flex;
    color: #095195;
    font-size: 13px;
    font-weight: 700;
  }

  .education-main {
    display: flex;
    background-color: #fff;
    padding: 16px;
    border-radius: 15px;

  }

  .education-main h1 {
    font-size: 22px;
    font-weight: 700;
    color: #095195;
    margin-top: 15px;
  }

  .education-main p {
    font-size: 13px;
    line-height: 29px;
    text-align: justify;
  }

  .education-main {
    margin-top: 50px;
  }

  .description-img {
    display: none;
  }

  .icon-header {
    color: #095195;
  }

  .icon-header-responsive {
    color: #095195;
  }

  .btn-report {
    display: none;
  }

  .date {
    display: flex;
  }

  a {
    text-decoration: none;
    font-size: 13px;
  }

  .description-img-response {
    padding: 16px;

  }

  .report {
    display: none;
  }

  .link-home {
    font-size: 12px;
    font-weight: 500;
    color: #095195;
  }

  .review {
    display: flex;
    gap: 30px;
    margin-top: 25px;
  }

  .icon-size {
    font-size: 12px;
  }

  .cycle-response {
    display: none;
  }

  .review-response {
    display: none;
  }

  @media screen and (max-width:960px) {
    .header {
      margin-top: 0;
    }

    .education-main {
      margin-top: 20px;
    }

    .description-img {
      display: flex;
      font-size: 8px;
      margin-top: 10px;
      margin-right: 4px;
    }

    .education-main h1 {
      margin-top: 10px;
      font-size: 14px;
    }

    .date span {
      font-size: 9px;
      margin-left: 10px;
    }

    .icon-header {
      color: #757575;
      width: 5px;
    }

    .icon-header-responsive {
      display: none;

    }

    .date {
      display: flex;
      flex-direction: row-reverse;
    }

    .cycle {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: blue;
    }

    .description-img-response {
      padding: 0;
    }

    .cycle-response {
      display: flex;
    }

    .review-response {
      display: flex;
      margin-top: 20px;
    }

    .review {
      display: none;
    }
  }

</style>
