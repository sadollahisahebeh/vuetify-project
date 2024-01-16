<template>
  <div class="menues">
    <div class="menu">
      <div class="d-flex">
        <h1>لینک های </h1>
      <h2 class="mr-2">مفید</h2>
      </div>
      <ul>
        <li v-for="(item,index) in useful" :key="index">
          <router-link to="/">{{ item.list }}</router-link>
        </li>
      </ul>
    </div>
    <div class="menu">
      <div class="d-flex">
        <h1> خدمات </h1>
      <h2 class="mr-2">ما</h2>
      </div>
      <ul>
        <li v-for="(item,index) in services" :key="index">
          <router-link to="/">{{ item.list }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const useful = [{
      list: "صفحه اصلی"
    },
    {
      list: " حوزه مدیریت"
    },
    {
      list: " معاونت پژوهشی"
    },
    {
      list: " معاونت آموزش "
    },
    {
      list: " چمد رسانه ای"
    },
  ]
  const services = [{
      list: "تماس با ما"
    },
    {
      list: "اخبار "
    },
    {
      list: "تماس با ما"
    },
  ]

</script>

<style scoped>
  li {
    list-style: none;
    margin-top: 11px;
  }

  a {
    text-decoration: none;
    color: #7a7a7a;
    font-size: 11px;
    font-weight: 400;
  }

  .menues {
    display: flex;
    justify-content: space-around;
  }

  .menu h1 {
    font-size: 14px;
    font-weight: 700;
    color: #7a7a7a;
    padding-bottom: 4px;
    border-bottom: 2px solid #095195;
  }
  .menu h2 {
    font-size: 14px;
    font-weight: 700;
    color: #7a7a7a;
    padding-bottom: 4px;
    border-bottom: 2px solid #095195;
  }
  .menu h2{
    border-bottom: 2px solid #1BA4AA;
  }
  

</style>
