<template>
  <p>Menú confirmado</p>
  <table>
    <tr v-for="menu in menus.data" v-bind:key="menu">
        <td>{{menu.day}}:</td>
        <td>{{menu.dishes[0]}} y {{menu.dishes[1]}}</td>
    </tr>
  </table>
</template>

<style scoped>
table{
  margin: auto;
}
td{
  text-align: start;
  padding: 10px;
}
</style>

<script>
import axios from "axios";
export default {
  data(){
    return{
      menus: {},
    }   
  },
  methods:{
    loadMenu(){
      axios.get('https://cafeteriaapinodejs.herokuapp.com/almuerzos')
        .then(menus => this.menus=menus)
    }
  },
  mounted(){
    this.loadMenu()
  }
}
</script>