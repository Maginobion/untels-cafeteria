<template>
  <nav>
    <div class="userCont">
      <div v-for="user in users.data" v-bind:key="user.id">
        <router-link :to="{ name: 'user', params:{ id: `${user.id}` } }">Usuario {{user.name}}</router-link>
      </div>     
    </div>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/admin">Administrador: Agregar Usuario</router-link> |
    <router-link to="/menuadd">Administrador: Agregar Menú</router-link> |
    <router-link to="/menu">Ver Menú</router-link>
  </nav>
  <router-view/>
</template>

<script>
import axios from "axios";
export default {
  
  data(){
    return{
      users: {},
    }   
  },
  methods:{
    loadUsers(){
      axios.get('https://cafeteriaapinodejs.herokuapp.com/usuarios')
        .then(users => this.users=users)
    }
  },
  mounted(){
    this.loadUsers()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.userCont{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 20px 10px;
}
</style>
