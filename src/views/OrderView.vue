<template>
    <p>Vas a pedir menú {{$route.params.id}}</p>
    <input type="date" name="day" v-model="day" min="2022-06-14" max="2022-06-18">
    <div>Almuerzos disponibles:</div>
    <div v-if="loaded">
        <div v-for="dish in dayDisplay" v-bind:key="dish">
            <p>{{dish.dishes[0]}}</p>
            <p>{{dish.dishes[1]}}</p>
        </div>
    </div>
    <div v-else>
        <p>Cargando...</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            loaded: false,
            day: '2022-06-14',
            dishes:[],
            dayDisplay:[]
        }
    },
    methods:{
    loadDishes(){
      axios.get('https://cafeteriaapinodejs.herokuapp.com/almuerzos')
        .then(dishes => this.dishes=dishes.data)
        .then(() => this.dayDisplay = this.dishes.filter(a => a.day === this.day))
        this.loaded=true
    }
    },
    mounted(){
        this.loadDishes()       
    },
    watch:{
        day(){
            this.dayDisplay=this.dishes.filter(a=>a.day === this.day)
        }
    }
}
</script>