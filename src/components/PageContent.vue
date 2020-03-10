<template>
  <div>
    <h1 class="subheader">Items List</h1>
    <ul>
        <li v-for="(item , index) in itemsList" v-bind:key="item.id" >
            <h2 v-on:click="item.show = !item.show">{{item.name}}</h2>
            <p>{{ item.date }}</p>
            <p>{{ item.urgent }}</p> 
            <p>Categories: {{ item.category }}</p>
            <p>Notes: {{ item.notes }}</p>
            <img v-bind:src="item.image" v-show="item.show"/>
            <buttonComponent></buttonComponent>
            <button name="delete" class="delete-item-btn" v-bind:id="item.id" v-on:click="deleteItem(index,item)">Delete</button>
        </li>
    </ul>
  </div>
</template>


<script>
import ButtonComponent from './ButtonComponent.vue';
import database from '../firebase.js';

export default {
  props: {
  },
  data() {
    return { 
      itemsList: []
    }
  },
  components:{
    'buttonComponent':ButtonComponent
  },
  methods: {
    fetchItems: function() {
      let item = {}
      database.collection('items').get().then((querySnapShot) => {
        querySnapShot.forEach(doc => {
          item = doc.data();
          console.log(item, "item");
          item.show = false;
          item.id = doc.id;
          this.itemsList.push(item);
        })
      })
    },
    deleteItem: function(index, item) {
      // deleting from database
      database.collection('items').doc(item.id).delete();

      // deleting from the itemsList array
      this.itemsList.splice(index, 1);

      // message to be displayed
      alert("item deleted successfully");
    }
  },
  created() {
    this.fetchItems();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subheader {
  color: black;
  text-align: center;
}

header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}
h2{
  text-align: center
}
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
img{
  width:100px;
  height:100px;
}

.delete-item-btn {
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  font-size: 12px;
}
</style>