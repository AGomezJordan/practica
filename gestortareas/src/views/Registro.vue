<template>
    <div>
        <v-container>
            <div class="tarjeta">
            <v-card>
                <v-card-text class="display-2 text-center white--text py-2" id="titulo">CREAR CUENTA</v-card-text>
                <v-card-text class="text-center display-1">
                    <v-form
                            ref="form"
                            lazy-validation
                            @submit.prevent="registrarUsuario({usuario: $v.usuario.$model, password: $v.password.$model})"
                    >
                        <v-text-field
                                v-model="$v.usuario.$model"
                                :counter="10"
                                :rules="nameRules"
                                label="Nuevo usuario"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="$v.password.$model"
                                counter
                                :rules="passRules"
                                label="Constraseña"
                                type="password"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="$v.password2.$model"
                                counter
                                :rules="passRules"
                                label="Confirme Constraseña"
                                type="password"
                                required
                        ></v-text-field>

                        <v-btn
                                :disabled="$v.$invalid"
                                color="alert"
                                class="mr-4"
                                type="submit"
                        >
                            CREAR CUENTA
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
            </div>

            <v-row justify="center">
                <v-dialog
                        v-model="message"
                        max-width="290"
                >
                    <v-card>
                        <v-card-title class="headline display-3">Upss... Algo no ha ido bien</v-card-title>

                        <v-card-text>
                            {{mensaje}}
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                    color="green darken-1"
                                    text
                                    @click="message=false"
                            >
                                Cerrar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {required, maxLength, minLength, sameAs} from 'vuelidate/lib/validators';
    import {mapActions, mapState, mapMutations} from 'vuex'
    export default {
        name: "IniciarSesion",
        data(){
            return{
                usuario: '',
                password: '',
                password2: '',
                message: this.dialog,
                nameRules: [
                    v => !!v || 'Usuario requerido',
                    v => (v && v.length <= 10) || 'Usuario maximo 10 caracteres',
                ],
                passRules: [
                v => !!v || 'Contraseña requerida',
                v => (v && v.length >= 8) || 'Contraseña minimo 8 caracteres',
            ]
            }
        },
        computed:{
          ...mapState(['mensaje', 'dialog'])
        },
        validations:{
          usuario:{required, maxLength:maxLength(10)},
          password: {required, minLength:minLength(8)},
          password2: {required, sameAs: sameAs('password')}
        },
        methods:{
            crearCuenta () {
                this.mensaje="Sesion Iniciada"
            },
            ...mapActions(['registrarUsuario']),
            ...mapMutations(['setDialog'])
        },
    }
</script>

<style scoped>
    #titulo{
        background-color: #202020;
    }
    .tarjeta{
        margin-top: 150px;
        border-radius: 54px 54px 54px 54px;
        box-shadow: -19px 20px 45px 0px rgba(17, 17, 17, 0.65);
        overflow: hidden;
    }
</style>