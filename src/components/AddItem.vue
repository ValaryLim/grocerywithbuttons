<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model="itemName"/>
        <label>Item Category</label>
        <input type="text"/>
        <button v-on:click="addItem">Add</button>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return{       
        msg:"Add Item",
        itemName: "",
    }
  },
  props: {
    itemsListInput: {
      type: Array
    },
    itemsListSecond: {
      type: Array
    }
  },
  methods: {
    addItem: function() {
      this.itemsListSecond.push({name: this.itemName, image: '', show: false});
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
    align-content: center;
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
</style>