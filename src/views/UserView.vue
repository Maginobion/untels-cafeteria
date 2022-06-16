<template>
    <div class="globalCont">
        <div v-if="ordered.length>0">
            <p>Tus almuerzos comprados:</p>
            <table>
                <tr>
                    <th>Día</th>
                    <th>Almuerzo</th>
                    <th>Estado</th>
                </tr>
                <tr class="orderCont" v-for="order in ordered" v-bind:key="order">
                    <td>{{order.day}}</td>
                    <td>{{order.detalle}}</td>                    
                    <td v-if="order.status==1">Canjeado!</td>
                    <td v-if="order.status==0">Aun no canjeado</td>
                </tr>
            </table>
        </div>
        <div v-else>
            <p>No hay almuerzos separados</p>
        </div>
        <div class="botButton">
            <router-link :to="{ name: 'order', params:{ id:`${$route.params.id}` } }">Comprar menú</router-link>
        </div>
    </div>
</template>

<style scoped>
.globalCont{
    margin: 0 auto;
    width: 500px;
    border: 2px solid rgb(177, 250, 67);
    border-radius: 8px;
    height: auto;
}
table{
    margin: 15px auto;
}
td{
    text-align: start;
    padding: 8px;
}
a{
    position: relative;
    text-decoration: none;
    color: blueviolet;
}
a::after{
    content: "";
    width: 0;
    display: block;
    border-bottom: 1px solid palevioletred;
    transition: 0.5s all ease-in-out;
}
a:hover::after{
    width: 100%;
}
.botButton{
    position: relative;
    width: fit-content;
    margin: auto;
    margin-bottom: 20px;
}
</style>


<script>
import axios from "axios";
export default {
    name: 'UserView',
    data(){
        return{
            ordered:[]
        }
    },
    methods:{
        loadOrders(){
            const id = this.$route.params.id
            const url = 'https://cafeteriaapinodejs.herokuapp.com/usuarios/'+id
            axios.get(url)
            .then(user => this.ordered = user.data.pedidos)
        }
    },
    mounted(){
        this.loadOrders()
    },
    watch:{
        $route (){
            this.loadOrders()
        }
    } 
}
</script>