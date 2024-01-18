// Utilities
import axios from 'axios'
import {
  createPinia
} from 'pinia'
import {
  createStore
} from 'vuex'

const store = createStore({
  state(){
    return{
      menus:[],
      news:null,
      latestNews:[],
      informationSchool:[],
      sliders:[],
      mostvisited:[],
      blogs:[],
      category:[],
      link:[],
      datasetting:[],
      article:[],
      detailblog:[],
      newnews:null
    }
  },
  getters:{
    getMenus(state){
      return state.menus
    },
    getnews(state){
      return state.news
    },
    getlatestNews(state){
     return state.latestNews
    },
    getinformation(state){
      return state.informationSchool
    },
    getsliders(state){
return state.sliders
    },
    getmostvisited(state){
      return state.mostvisited
    },
    getblogs(state){
      return state.blogs
    },
    getcategory(state){
return state.category
    },
    getlink(state){
      return state.link
    },
    getdatasetting(state){
      return state.datasetting
    },
    getarticle(state){
      return state.article
    },
    getdetailblog(state){
      return state.detailblog
    },
    getnewNews(state){
      return state.newnews
    }

  },
  mutations:{
    setMenus(state,newList){
      state.menus=newList
    },
    setnews(state,newNews){
state.news = newNews
    },
    setlatestNews(state,newLates){
      state.latestNews = newLates
    },
    setinformation(state,newSchoolNews){
      state.informationSchool = newSchoolNews;
    },
    setsliders(state,newslide){
      state.sliders=newslide
    },
    setmostvisited(state,newvisit){
      state.mostvisited=newvisit
    },
    setblogs(state,newblogs){
 state.blogs = newblogs
    },
    setcategory(state,newcategory){
      state.category = newcategory
    },
    setlink(state,newlink){
      state.link = newlink
    },
    setdatasetting(state,newset){
      state.datasetting = newset
    },
    setarticle(state,newarticle){
      state.article=newarticle
    },
    setdetailblog(state,newdetail){
      state.detailblog = newdetail
    },
    setnewNews(state,newlist){
      state.newnews=newlist
    }

  },
  actions:{
  async getmenusfromserver({commit}){
   await axios.get('menus/header')
   .then((res)=>{
commit('setMenus',res.data.data.menuItems)
     }).catch(()=>{
      
     })
    },
 async getNewfromserver({commit}){
   await  axios.get('news/featured').then((res)=>{
commit('setnews',res.data.data.news)
console.log(res.data.data.news);
      }).catch(()=>{

      })
    },
    async getLatestNewsFromserver({commit}){
   await  axios.get('/news/recent').then((res)=>{
commit('setlatestNews',res.data.data.news)
      }).catch(()=>{

      })
    },
    async getinformationschool({commit}){
      await axios.get('announcements/recent').then((res)=>{
commit('setinformation',res.data.data.announcements)
      }).catch(()=>{

      })
    },
    async getSlidersfromserver({commit}){
      await axios.get('sliders').then((res)=>{
commit('setsliders',res.data.data.sliders)
      }).catch(()=>{

      })
    },
    async getvisitedfromserver({commit}){
      await axios.get('news/most-visited').then((res)=>{
commit('setmostvisited',res.data.data.news)
      }).catch(()=>{

      })
    },
 async getcategoryFromServer({commit}, num){
  console.log('sdfghjkl');
  await axios.get('categories',{
    query: {
      category_id:num
    }
  }).then((res)=>{
commit('setcategory',res.data.data.categories)
  }).catch()
 },
 async getlinkfromserver({commit}){
  axios.get('links').then((res)=>{
commit('setlink',res.data.data.links)
  }).catch()
 },
 async getdatasetting({commit}){
  axios.get('settings').then((res)=>{
commit('setdatasetting',res.data.data.settings)
  }).catch()
 },
 async getarticlefromserver({commit}){
  axios.get('articles/recent').then((res)=>{
commit('setarticle',res.data.data.articles)
  }).catch()
 },
 async getdetailblogfromserver({commit},num){
  axios.get('articles', {
    query: {
      category_id:num
    }
  }).then((res)=>{
commit('setdetailblog',res.data.data.articles)
  }).catch()
 },
 async getnewNewsFromserver({commit},page=1){
  await  axios.get(`news?page=${page}`).then((res)=>{
commit('setnewNews',res.data.data.news)
     }).catch(()=>{

     })
   },

  }
})

// const store = createStore({
//   state() {
//     return {
//       sliders: null,
//     }
//   },
//   getters: {
//     getslider(state) {
//       return state.sliders;
//     }
//   },
//   mutations: {
//     setsliders(state, newlist) {
//       state.sliders = newlist
//     }
//   },
//   actions: {
//    async  getHomeDatafromserver(context,num) {
//      await axios.get('/api/categories?type=news')
//      .then((res) => {
//         context.commit('setsliders',res.data.data.categories.id)
//         console.log();
//       }).catch(() => {

//       })
//     }
//   }
// })
 export default store;