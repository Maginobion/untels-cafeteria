<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Para separar su almuerzo, ingrese con alguno de los usuarios.
    </p>
    <p>
      Para agregar usuarios o menús, use las opciones de Administrador.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
