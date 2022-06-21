<template>
    <p>Compra de menú</p>
    <form action="post" v-on:submit.prevent="submitForm">
        Día: <input type="date" name="day" v-model="day" min="2022-06-21" max="2022-06-25"> <span>{{message}}</span>
        <div class="title">Almuerzos disponibles:</div>
        <div v-if="loaded">
            <table class="flexcol" v-for="dish in dayDisplay" v-bind:key="dish">
                <tr>
                    <td>
                        <input type="radio" required name="asd" v-model="selected" :value="0">
                    </td>
                    <td>
                        {{dish.dishes[0]}}
                    </td>                     
                </tr>
                <tr>
                    <td>
                        <input type="radio" required name="asd" v-model="selected" :value="1">
                    </td>
                    <td>
                        {{dish.dishes[1]}}
                    </td>   
                </tr>               
            </table>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
        <input type="submit" value="Aceptar">
    </form>
</template>

<style scoped>
span{
    color: red;
}
.title{
    margin: 40px 0 10px 0;
}
table{
    margin: auto;
    text-align: left;
}
input[type=submit]{
    margin: 10px;
}
</style>

<script>
import axios from "axios";
import router from '@/router';
export default {
    data(){
        return{
            loaded: false,
            selected: '',
            day: '2022-06-21',
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
            .then(user => this.user = user.data)
        },
        loadDishes(){           
            axios.get('https://cafeteriaapinodejs.herokuapp.com/almuerzos')
                .then(dishes => this.dishes=dishes.data)
                .then(() => this.dayDisplay = this.dishes.filter(a => a.day === this.day))
            this.loaded=true
        },
        getId(){
            const selectedDishes = this.dishes.find(a=>a.day == this.day)
            console.log(selectedDishes)
            console.log(this.user)
            return selectedDishes.id
        },
        submitForm(){
            const almuerzosId = this.getId()
            if(this.user.pedidos.map(a=>a.day).includes(this.day) && this.user.pedidos.length>0){
                this.message='Este día ya tiene almuerzos comprados.'
            }
            else router.push('/user/'+this.$route.params.id+'/order/'+almuerzosId+'/'+this.selected)
        },
    },
    mounted(){
        this.loadUser()
        this.loadDishes()
    },
    watch:{
        day(){
            this.dayDisplay=this.dishes.filter(a=>a.day === this.day)
        },
    }
}
</script>