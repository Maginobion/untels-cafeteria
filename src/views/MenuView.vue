<template>
    <div v-for="menu in menus.data" v-bind:key="menu">
        <p>{{menu.day}}:</p>
        <p>{{menu.dishes[0]}} y {{menu.dishes[1]}}</p>
    </div>
</template>

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