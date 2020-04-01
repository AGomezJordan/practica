<template>
    <div class="container">
        <h1>Editar</h1>
        <div v-if="carga">
            <h3>Cargando tarea...</h3>
            <pulse-loader></pulse-loader>
        </div>
        <form v-if="!carga" class="form-inline" @submit.prevent="editar(tarea)">
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
            <button type="submit" class="btn btn-success mb-2">Editar</button>
        </form>
    </div>
</template>

<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Editar",
        data(){
            return{
                id: this.$route.params.id
            }
        },
        methods:{
            ...mapActions(["getTarea", "editar"])
        },
        created() {
            this.getTarea(this.id)
        },
        computed:{
            ...mapState(['tarea', 'carga'])
        },
        components:{
            PulseLoader
        }
    }
</script>
