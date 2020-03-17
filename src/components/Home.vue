<template>
    <div id="main">
        <h1>Home</h1>
        <bubblechart></bubblechart>
    </div>
</template>

<script>
import bubblechart from './bubblechart.js'
export default {
    components:{
        bubblechart
    },
    data() {
        return {
            labels: []

        }
    }
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:240px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>>