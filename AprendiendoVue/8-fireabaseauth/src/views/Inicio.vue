<template>
    <div class="text-center container">
        <h1>Lista de tareas: {{usuario.email}}</h1>
        <router-link :to="{name: 'agregar'}">
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>

        <div v-if="carga" class="text-center mt-5">
            <h3>Cargando contenido....</h3>
            <pulse-loader></pulse-loader>
        </div>
        <ul class="list-group mt-5" v-if="!carga">
            <li class="list-group-item text-left" v-for="tarea of tareas" :key="tarea.id">
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
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "Inicio",
        methods:{
            ...mapActions(['getTareas', 'eliminar'])
        },
        created(){
          this.getTareas()
        },
        computed:{
            ...mapState(['usuario', 'tareas', 'carga'])
        },
        components: {
            PulseLoader
        }
    }
</script>

<style scoped>

</style>