<template>
    <div>
        <h1>Lista de tareas</h1>
        <ul>
            <li v-for="tarea of tareas" :key="tarea.id">
                {{tarea.id}} - {{tarea.nombre}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Inicio",
        methods:{
            ...mapActions(['getTareas'])
        },
        created() {
            this.getTareas()
        },
        computed:{
            ...mapState(['tareas'])
        }
    }
</script>
