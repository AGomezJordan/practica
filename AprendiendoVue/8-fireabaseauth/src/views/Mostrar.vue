<template>
    <div class="container">
        <h1>Mostrar</h1>
        <h4>{{tarea.nombre}}</h4>
        <p>{{tarea.comentario}}</p>
    </div>
</template>

<script>
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
            ...mapState(['tarea'])
        }
    }
</script>

<style scoped>

</style>