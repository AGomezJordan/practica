<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="conexionServer">Ejecutar</button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'About',
    methods:{
      ...mapActions(['conexionServer'])
    }
  }
</script>
