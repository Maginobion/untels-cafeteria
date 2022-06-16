<template>
    <p>Pedido seleccionado:</p>
    <table class="first">
        <tr>
            <th>Día</th>
            <th>Plato</th>
            <th>Precio</th>
        </tr>
        <tr>
            <td>{{date}}</td>
            <td>{{dishes[$route.params.selected]}}</td>
            <td>S./ 2.00</td>
        </tr>
    </table>
    <p>Indique su medio de pago:</p>
    <table>
        <tr>
            <td><input type="radio" required checked name="pago"></td>
            <td>Monedero virtual</td>
        </tr>
        <tr>
            <td><input type="radio" required name="pago"></td>
            <td>Visa</td>
        </tr>
    </table> 
    <button @click="confirmPayment">Comprar</button>
</template>

<style scoped>
table{
    margin: auto;
}
.first>tr>td{
    padding: 10px;
}
td{
    text-align: start;
    padding: 4px;
}
button{
    margin: 20px;
}
</style>

<script>
import axios from "axios";
export default {
    data(){
        return{
            date: '',
            dishes: []
        }
    },
    methods:{
        loadDish(){           
            axios.get('https://cafeteriaapinodejs.herokuapp.com/almuerzos/'+this.$route.params.almid)
                .then(almuerzo => {
                    this.date = almuerzo.data.day
                    this.dishes = almuerzo.data.dishes
                })
            console.log(this.dishes)
            console.log(this.date)
        },
        confirmPayment(){
            axios.post('https://cafeteriaapinodejs.herokuapp.com/usuarios/'+this.$route.params.id+'/add/'+this.$route.params.almid+'/'+this.$route.params.selected)
                .then(()=>window.location.replace('https://dapper-boba-2c6d95.netlify.app/'))
        },
    },
    mounted(){
        this.loadDish()
    },
    watch:{
        day(){
            this.dayDisplay=this.dishes.filter(a=>a.day === this.day)
        },
    }
}
</script>