<template>
    <form v-on:submit.prevent="submitForm">
        <div class="formStyle">
            <div class="flex">
                <p>Día:</p>
                <input type="date" @change="cleanDirty" v-model="form.day"> <p class="error">{{message}}</p>
            </div>
            <div class="flex moregap">
                <div>
                    <p>Menu 1:</p>
                    <input type="text" required v-model="dish1">
                </div>
                <div>
                    <p>Menu 2:</p>
                    <input type="text" required v-model="dish2">
                </div>
            </div>
            <input type="submit" value="Confirmar">
        </div>
    </form>    
</template>
<style scoped>
p{
    margin: 8px 0;
}
.formStyle{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
}
.formStyle>div{
    text-align: start;
}
input[type=submit]{
    margin-top: 10px;
    align-self: center;
}
.error{
    color: red;
}
.flex{
    display: flex;
    align-items: center;
    gap: 15px;
}
.moregap{
    margin: 15px 0;
    gap: 40px;
}
</style>

<script>
import axios from "axios";
export default {
    data(){
        return{
            form:{
                day: '2022-06-20',
                dishes:['','']
            },
            days:[],
            dish1: '',
            dish2: '',
            message:''
        }
    },
    methods:{
        fullDays(){
            axios.get('https://cafeteriaapinodejs.herokuapp.com/almuerzos')
                .then((res) => {
                    this.days=res.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        submitForm(){
            if(this.days.findIndex(a=>this.form.day==a.day)){
                this.message='Este día ya tiene almuerzos registrados.'
            }
            else axios.post('https://cafeteriaapinodejs.herokuapp.com/almuerzos', this.form)
                .then((res) => {
                    console.log(res)
                    console.log(this.form)
                })
                .catch((error) => {
                    console.log(error)
                }).finally(() => {
                    window.location.replace('https://dapper-boba-2c6d95.netlify.app/')
                });
        },
        cleanDirty(){
            this.message=''
        }
    },
    mounted(){
        this.fullDays()
    },
    watch:{
        dish1(){
            this.form.dishes[0]=this.dish1
        },
        dish2(){
            this.form.dishes[1]=this.dish2
        }
    }
}
</script>