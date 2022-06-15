<template>
  <div class="about">
    <form v-on:submit.prevent="submitForm">
      <div>
        <p>Nombre:</p>
        <input type="text" id="name" v-model="form.name">
      </div>
      <input type="submit" value="Confirmar">
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AdminView',
  data(){
    return{
      form: {
        name: '',
        pedidos: []
      }
    }
  },
  methods:{
    submitForm(){
      axios.post('https://cafeteriaapinodejs.herokuapp.com/usuarios', this.form)
          .then((res) => {
              console.log(res)
              console.log(this.form)
          })
          .catch((error) => {
              console.log(error)
          }).finally(() => {
              window.location.replace('http://localhost:8081/')
          });
    }
  }
}
</script>