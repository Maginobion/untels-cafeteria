<template>
    <p>Vas a pedir menú</p>
    <form action="post" v-on:submit.prevent="submitForm">
        <input type="date" name="day" v-model="day" min="2022-06-14" max="2022-06-18">
        <div>Almuerzos disponibles:</div>
        <div v-if="loaded">
            <div v-for="dish in dayDisplay" v-bind:key="dish">
                <input type="radio" name="asd"> {{dish.dishes[0]}}
                <input type="radio" name="asd">{{dish.dishes[1]}}
            </div>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </form>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            form:{

            },
            loaded: false,
            day: '2022-06-14',
            dishes:[],
            dayDisplay:[],
            user:{},
            message:''
        }
    },
    methods:{
        loadUser(){
            const id = this.$route.params.id
            const url = 'https://cafeteriaapinodejs.herokuapp.com/usuarios/'+id
            axios.get(url)
            .then(user => this.ordered = user.data)
        },
        loadDishes(){
            // if(this.days.findIndex(a=>this.form.day==a.day)){
            //     this.message='Este día ya tiene almuerzos registrados.'
            // }
            // if(this.user.pedidos.findIndex(a=>this.f))
        axios.get('https://cafeteriaapinodejs.herokuapp.com/almuerzos')
            .then(dishes => this.dishes=dishes.data)
            .then(() => this.dayDisplay = this.dishes.filter(a => a.day === this.day))
            this.loaded=true
        }
    },
    mounted(){
        this.loadUser()
        this.loadDishes()
    },
    watch:{
        day(){
            this.dayDisplay=this.dishes.filter(a=>a.day === this.day)
        }
    }
}
</script>