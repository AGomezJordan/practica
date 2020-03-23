<template>
    <div>
        <h1>Editar</h1>
        <form class="form-inline" @submit.prevent="editar(tarea)">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input v-model="tarea.nombre" type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
            </div>
            <button type="submit" class="btn btn-success mb-2">Editar</button>
        </form>
    </div>
</template>

<script>
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
            ...mapState(['tarea'])
        }
    }
</script>
