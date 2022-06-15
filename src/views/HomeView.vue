<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/untelslogo.png" width="400">
    <UntelsHome msg="Bienvenido a la Cafetería de UNTELS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UntelsHome from '@/components/UntelsHome.vue'

export default {
  name: 'HomeView',
  components: {
    UntelsHome
  }
}
</script>
