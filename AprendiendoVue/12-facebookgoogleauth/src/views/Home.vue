<template>
  <div>
    <h1>BIENVENID@ <span class="display-1 black--text">{{usuario.nombre}}</span></h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
