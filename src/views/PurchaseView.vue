<template>
    <p>Pedido seleccionado:</p>
    <p>Día: {{date}}</p>
    <p>Plato: {{dishes[$route.params.selected]}}</p>    
    <p>Precio: S./ 2.00</p>
    <p>Indique su medio de pago:</p>
    Visa <input type="radio" required checked name="pago">
    Monedero virtual <input type="radio" required name="pago">
    <br>
    <button @click="confirmPayment">Comprar</button>
</template>

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