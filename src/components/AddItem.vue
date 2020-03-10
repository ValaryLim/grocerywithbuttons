<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
      <label>Item Name</label>
      <input type="text" v-model.lazy="item.name" required/>
      
      <br>

      <div>
        <h4>Item Category</h4>
        <label for="staples">Staples</label>
        <input type="checkbox" id="staples" value="staples" v-model="item.category">
        <label for="dairy">Dairy</label>
        <input type="checkbox" id="dairy" value="dairy" v-model="item.category">
        <label for="fruits">Fruits</label>
        <input type="checkbox" id="fruits" value="fruits" v-model="item.category">
        <label for="vegetables">Vegetables</label>
        <input type="checkbox" id="vegetables" value="vegetables" v-model="item.category">
      </div>
      <br>
      <div>
        <h4>Urgency</h4>
        <label for="urgent">Urgent</label>
        <input type="radio" id="urgent" value="urgent" v-model="item.urgent">
        <label for="noturgent">Not Urgent</label>
        <input type="radio" id="noturgent" value="not urgent" v-model="item.urgent">
        <br>
      </div>

      <label>Notes</label>
      <input type="text" v-model.lazy="item.notes" required/>

      <button id="add-item-btn" v-on:click.prevent="addItem">AddItem</button>
    </form>
  </div>
</template>

<script>
import database from '../firebase.js';

export default {
  data(){
    return{       
        msg:"Add Item",
        item: {
          name: "",
          date: "",
          category: [],
          urgent: "",
          notes: "-",
        },
    }
  },
  props: {
  },
  methods: {
    updateDate: function() {
      var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth(); // january is 0 and not 1
      var year = currentDate.getFullYear();
      var dateString = date + "-" + (month + 1) + "-" + year;
      this.item['date'] = dateString;
    },
    addItem: function() {
      this.updateDate();

      database.collection('items').doc().set(this.item);
      
      // emptying the datafield
      this.item['name'] = "";
      this.item['category'] = "";
      this.item['urgent'] = "";
      this.item['notes'] = "-";

      alert("I am in the DB .... :-) Item saved successfully")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: left;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}

#add-item-btn {
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  font-size: 12px;
}
</style>