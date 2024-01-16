 <template>
   <div>
    <div class="response-nav">
     <div class="d-flex">
       <img src="/logoFooter.png" class="logo" />
       <h1>حوزه علمیه خواهران</h1>
     </div>
     <div class="menu">
       <button @click="showMenu = !showMenu" variant="text">
         <v-icon>mdi-menu</v-icon>
       </button>
     </div>
 
   </div>
  <div class="b">
    <ul class="list-response-nav" :class="{showMenu}" @click="showMenu =flase">
         <li v-for="(item,index) in showdata" :key="index">
           <router-link :to="item.link" class="link-response-menu">{{ item.title }}</router-link>
         </li>
       </ul>
  </div>
   </div>
 </template>

 <script setup>
   import 'animate.css';
   import { ref } from 'vue';
   const showMenu = ref(false);
   const menu = [

     {
       names: "صفحه اصلی",
       router: '/'
     },
     {
       names: " حوزه علمیه",
       router: '/'
     },
     {
       names: " معاونت پژوهشی",
       router: '/'
     },
     {
       names: " معاونت آموزش",
       router: '/Education'
     },
     {
       names: "   لیست آموزش",
       router: '/EducationList'
     },
     {
       names: " تماس با ما",
       router: '/ContactUs'
     },
     {
       names: " اخبار",
       router: '/News'
     },
     {
       names: " درباره ما",
       router: '/AboutMe'
     },
   ]
defineProps({
  showdata:Object
})
 </script>

 <style scoped>
   li {
     list-style: none;
   }

   a {
     text-decoration: none;
   }
   .response-nav {
     display: flex;
     justify-content: space-between;
   }

   .logo {
     width: 24px;
     height: 24px;
   }

   .response-nav h1 {
     font-size: 9px;
     font-weight: 700;
     color: #000000;
     margin-right: 4px;
     display: flex;
     align-items: center;
   }
   .list-response-nav{
    height: 0;
  overflow: hidden;
  &.showMenu{
    height: auto;
    overflow: visible;
  text-align: center;
  animation: fadeInDown;
  animation-duration: 2s;
  }
   }
   .list-response-nav li {
     padding: 5px;
   }

   .link-response-menu {
     color: black;
     font-size: 10px;
     font-weight: 600;
   }

 </style>
