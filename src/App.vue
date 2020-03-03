<template>
  <div id="app">    
    <app-header v-bind:title="msg"></app-header>
    <router-view v-bind:itemsListInput="itemsListInput" v-bind:itemsListSecond="itemsListSecond"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
//Registering components Locally
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import PageContent from './components/PageContent.vue'
export default {
  name: 'App',
  data(){
    return {
      itemsListInput: [{name:'Eggs',image:'./assets/eggs.jpg',show:true},
                    {name:'Bread',image:'/assets/bread.jfif',show:true},
                    {name:'Jam',image:'/assets/jam.jfif',show:true},
                    {name:'CornFlakes',image:'/assets/cornflakes.jfif',show:true},
                    {name:'Milk',image:'/assets/milk.jfif',show:true},
                    {name:'Juice',image:'/assets/juice.jfif',show:true}],
          
      itemsListSecond: [{name:'Oranges',image:'./assets/orange.jpg',show:false},
                    {name:'Peanut Butter',image:'/assets/peanutbutter.jpeg',show:false},
                    {name:'Strawberries',image:'/assets/strawberries.jpg',show:false}
                    ],
      msg:"Grocery"
          }
  },
  components: {
    //Registering with a name
    'app-header':Header,
    'app-footer':Footer,
    //Registering without a name
    //PageContent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
