<template>
    <div class="text-center">
        <h1>Lista de tareas</h1>
        <router-link :to="{name: 'agregar'}">
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>
        <ul class="list-group mt-5">
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
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Inicio",
        methods:{
            ...mapActions(['getTareas', 'eliminar'])
        },
        created() {
            this.getTareas()
        },
        computed:{
            ...mapState(['tareas'])
        }
    }
</script>
