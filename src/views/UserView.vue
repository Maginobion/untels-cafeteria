<template>
    <div class="globalCont">
        <div v-if="ordered.length>0">
            <div>Tus almuerzos comprados:</div>
            <div class="orderCont" v-for="order in ordered" v-bind:key="order">
                <span>{{order.detalle}}</span>
                <span>{{order.day}}</span>
                <span v-if="order.status==1">Canjeado!</span>
                <span v-if="order.status==0">Aun no canjeado</span>
            </div>
        </div>
        <div v-else>
            <div>No hay almuerzos separados</div>
        </div>
        <router-link :to="{ name: 'order', params:{ id:`${$route.params.id}` } }">Comprar menú</router-link>
    </div>
</template>

<style scoped>
.globalCont{
    margin: auto;
    width: 500px;
    border: 1px solid rgb(177, 250, 67);
    border-radius: 5px;
}
.orderCont{
    display: flex;
    justify-content: center;
    gap: 20px
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