<template>
    <div class="container">
        <h1>Agregar</h1>
        <form class="form-inline" @submit.prevent="agregar(tarea)">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input v-model="tarea.nombre" type="text" class="form-control">
            </div>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Comentario</div>
                </div>
                <input v-model="tarea.comentario" type="text" class="form-control">
            </div>
            <button type="submit" class="btn btn-success mb-2">Agregar</button>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Agregar",
        data(){
            return{
                tarea:{nombre: '', comentario: ''}
            }
        },
        methods:{
            ...mapActions(['agregar'])
        }
    }
</script>

<style scoped>

</style>