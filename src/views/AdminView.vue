<template>
  <div class="about">
    <form v-on:submit.prevent="submitForm">
      <div class="inputCont">
        <p>Nombre:</p>
        <input type="text" id="name" required v-model="form.name">
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
              window.location.replace('https://dapper-boba-2c6d95.netlify.app/')
          });
    }
  }
}
</script>

<style scoped>
p{
  margin: 2px;
  text-align: left;
}
.inputCont{
  width: fit-content;
}
form{
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: flex-end;
}
</style>