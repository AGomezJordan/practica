<template>
    <div class="container">
        <h1>Agregar</h1>
        <form class="form-inline" @submit.prevent="agregar({nombre: $v.nombre.$model, comentario: $v.comentario.$model})">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input :class="{'is-invalid': $v.nombre.$error, 'is-valid': !$v.nombre.$invalid}"
                   v-model="$v.nombre.$model" type="text" class="form-control">
            </div>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Comentario</div>
                </div>
                <input :class="{'is-invalid': $v.comentario.$error, 'is-valid': !$v.comentario.$invalid}"
                   v-model="$v.comentario.$model" type="text" class="form-control">
            </div>
            <button :disabled="$v.$invalid || carga" type="submit" class="btn btn-success mb-2">Agregar</button>
        </form><br>
        <p class="text-danger" v-if="!$v.nombre.minLength">Campo nombre tiene que tener minimo 3 caracteres...</p>
        <p class="text-danger" v-if="!$v.nombre.required">Campo nombre es obligatorio*</p><br>
        <p class="text-danger" v-if="!$v.comentario.required">Campo comentario es obligatorio*</p><br>
    </div>
</template>

<script>
    import { required, minLength } from 'vuelidate/lib/validators'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Agregar",
        data(){
            return{
                nombre: '',
                comentario: ''

            }
        },
        methods:{
            ...mapActions(['agregar'])
        },
        validations: {
            nombre: {
                required,
                minLength: minLength(3)
            },
            comentario: {
                required
            }
        },
        computed:{
            ...mapState(['carga'])
        }
    }
</script>

<style scoped>

</style>