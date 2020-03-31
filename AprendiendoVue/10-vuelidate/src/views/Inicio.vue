<template>
    <div class="container">
        <h1 class="text-center p-2 txtgreen">VUELIDATE</h1>
        <form @submit.prevent="submit">
            <!-- EMAIL -->
            <div class="text-danger" v-if="!$v.email.required">Campo obligatorio*</div>
            <div class="invalid-feedback">Email incorrecto...</div>
            <input v-model.lazy="$v.email.$model" placeholder="Email"
           :class="{'is-invalid': $v.email.$error, 'is-valid':!$v.email.$invalid}" class="form-control my-3">
            <!-- CONTRASEÑA 1 -->
            <div class="text-danger" v-if="!$v.pass1.required">Campo obligatorio*</div>
            <div class="text-danger" v-if="!$v.pass1.minLength">Mínimo 6 caracteres</div>
            <input :class="{'is-invalid': $v.pass1.$error, 'is-valid': !$v.pass1.$invalid}" type="password" class="form-control my-3"
           placeholder="Introducir contraseña" v-model.lazy="$v.pass1.$model">
            <!-- CONTRASEÑA 2 -->
            <div class="text-danger" v-if="!$v.pass2.required">Campo obligatorio*</div>
            <div class="text-danger" v-if="!$v.pass2.sameAs">Las contraseñas no coinciden</div>
            <input type="password" :class="{'is-valid': !$v.pass2.$invalid, 'is-invalid': $v.pass2.$error}" class="form-control my-3"
           placeholder="Confirmar contraseña" v-model.lazy="$v.pass2.$model">
            <button class="btn bggreen text-light" type="submit">ENVIAR</button>
        </form><br>
        <div v-if="cargando" class="spinner-border text-success" role="status">
            <p><span class="sr-only">Procesando datos..</span></p>
        </div>
        <p>{{error}}</p>
    </div>
</template>

<script>
    import {required, email, sameAs, minLength} from 'vuelidate/lib/validators';
    export default {
        name: "Inicio",
        data(){
            return{
                email: '',
                pass1: '',
                pass2: '',
                error: '',
                cargando: false
            }
        },
        validations:{
            email: {required, email},
            pass1: {
                required,
                minLength: minLength(6)
            },
            pass2:{
                required,
                sameAs: sameAs('pass1')
            }
        },
        methods:{
            submit(){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.error = 'Existen campos invalidos!'
                } else {
                    // do your submit logic here
                    this.cargando = true;
                    setTimeout(() => {
                        this.cargando = false;
                        this.error = 'Datos correctos :)'
                    }, 2000)
                }
            }
        }
    }
</script>

<style scoped>

</style>