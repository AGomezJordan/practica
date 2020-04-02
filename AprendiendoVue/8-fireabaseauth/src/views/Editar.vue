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
                <input :class="{'is-invalid': $v.tarea.nombre.$error}" v-model="$v.tarea.nombre.$model" type="text" class="form-control">
            </div>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Comentario</div>
                </div>
                <input :class="{'is-invalid': $v.tarea.comentario.$error}" v-model="$v.tarea.comentario.$model" type="text" class="form-control">
            </div>
            <button type="submit" class="btn btn-success mb-2" :disabled="$v.tarea.$invalid">Editar</button>
        </form>
        <p class="text-danger" v-if="!$v.tarea.nombre.required && !carga">Campo nombre requerido*</p>
        <p class="text-danger" v-if="!$v.tarea.nombre.minLength && !carga">Campo nombre minimo 3 caracteres</p>
        <p class="text-danger" v-if="!$v.tarea.comentario.required && !carga">Campo comentario requerido*</p>
    </div>
</template>

<script>
    import { required, minLength } from 'vuelidate/lib/validators'
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
        },
        validations:{
            tarea:{
                nombre:{required, minLength: minLength(3)},
                comentario: {required}
            }
        }
    }
</script>
