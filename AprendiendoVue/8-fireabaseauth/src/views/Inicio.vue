<template>
    <div class="text-center container">
        <h1>Lista de tareas: {{usuario.email}}</h1>
        <router-link :to="{name: 'agregar'}">
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>

        <form @submit.prevent="buscador(texto)">
            <input v-model="texto" class="form-control mt-4" placeholder="Buscar tarea..." v-on:keyup="buscador(texto)">
        </form>

        <div v-if="carga" class="text-center mt-5">
            <h3>Cargando contenido....</h3>
            <pulse-loader></pulse-loader>
        </div>
        <ul class="list-group mt-5" v-if="!carga">
            <li class="list-group-item text-left" v-for="tarea of arrayFiltro" :key="tarea.id">
                {{tarea.nombre}}
                <div class="float-right">
                    <router-link :to="{name: 'editar', params:{id: tarea.id}}">
                        <button class="btn-warning btn-sm text-light">Editar</button>
                    </router-link>
                    <router-link :to="{name: 'mostrar', params:{id: tarea.id}}">
                        <button class="ml-2 btn-primary btn-sm text-light">Mostrar</button>
                    </router-link>
                    <button class="btn-danger btn-sm ml-2" @click="eliminar(tarea.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader'
    import {mapState, mapActions, mapGetters} from 'vuex'
    export default {
        name: "Inicio",
        data(){
            return{
                texto: ''
            }
        },
        methods:{
            ...mapActions(['getTareas', 'eliminar', 'buscador'])
        },
        created(){
          this.getTareas()
        },
        computed:{
            ...mapState(['usuario', 'tareas', 'carga']),
            ...mapGetters(['arrayFiltro'])
        },
        components: {
            PulseLoader
        }
    }
</script>

<style scoped>

</style>