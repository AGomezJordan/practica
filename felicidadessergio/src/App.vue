<template>
  <div id="app">
    <div id="nav">
      <!-- Image and text -->
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand text-light">
          Felicidades borracho!! <span class="d-none d-sm-none d-md-block" v-if="pcode"> Tu codigo <span class="text-success">{{pcode}}</span></span>
        </a>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'App',
    computed:{
      ...mapState(['pcode'])
    }
  }
</script>
