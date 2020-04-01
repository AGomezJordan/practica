<template>
    <div class="container">
        <h1>Mostrar</h1>
        <div v-if="carga">
            <h3>Cargando tarea...</h3>
            <pulse-loader></pulse-loader>
        </div>
        <div v-if="!carga">
            <h4>{{tarea.nombre}}</h4>
            <p>{{tarea.comentario}}</p>
        </div>
    </div>
</template>

<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Mostrar",
        data(){
          return{
              id: this.$route.params.id
          }
        },
        created(){
          this.getTarea(this.id)
        },
        methods:{
            ...mapActions(['getTarea'])
        },
        computed:{
            ...mapState(['tarea', 'carga'])
        },
        components:{
            PulseLoader
        }
    }
</script>

<style scoped>

</style>