<template>
    <div>
    <v-container v-if="cargando" class="display-1 text-center">
        <h3>Añadiendo tarea...</h3>
        <square-loader color="purple"></square-loader>
    </v-container>
    <v-container v-if="!cargando">
        <div class="tarjeta">
        <v-card>
            <v-card-text class="display-2 text-center white--text py-2" id="titulo">AÑADIR NOTA</v-card-text>
            <v-form @submit.prevent="addNota({
                titulo: $v.titulo.$model,
                subtitulo: $v.subtitulo.$model,
                articulo: $v.articulo.$model,
                foto: foto
                })">
                <v-card-text>
                    <v-text-field
                        counter
                        label="Titulo"
                        required
                        v-model="$v.titulo.$model"
                        :rules="tituloRules"
                    ></v-text-field>
                    <v-text-field
                            counter
                            label="Subtitulo"
                            required
                            v-model="$v.subtitulo.$model"
                            :rules="subRules"
                    ></v-text-field>
                    <v-textarea
                            auto-grow
                            :rules="articuloRules"
                            label="Articulo"
                            rows="1"
                            counter
                            v-model="$v.articulo.$model"
                    ></v-textarea>
                    <v-file-input
                            @change="validateFoto()"
                            v-model="foto"
                            label="Foto"
                            accept="image/jpeg"
                            :rules="fotoRules"
                    >
                    </v-file-input>
                </v-card-text>
                <v-card-text class="text-center">
                    <v-btn type="submit" class="ma-3 success" v-if="!$v.$invalid && !cargando && (valido || foto==null) ">AÑADIR</v-btn>
                    <v-btn type="reset" class="ma-3 red white--text">REINICIAR</v-btn>
                </v-card-text>
            </v-form>
        </v-card>
        </div>
        <Mensaje></Mensaje>
    </v-container>
    </div>
</template>

<script>
    import {required, maxLength} from 'vuelidate/lib/validators';
    import {mapActions, mapState} from 'vuex'
    import SquareLoader from 'vue-spinner/src/SquareLoader'
    import Mensaje from "../components/Mensaje";

    export default {
        name: "Add",
        components: {Mensaje, SquareLoader},
        data(){
          return{
              valido: true,
              titulo: '',
              subtitulo: '',
              articulo: '',
              foto: null,
              tituloRules: [
                  v => !!v || 'Titulo Requerido',
                  v => (v && v.length <= 255) || 'Titulo maximo 255 caracteres',
              ],
              subRules: [
                  v => !!v || 'Subtitulo Requerido',
                  v => (v && v.length <= 255) || 'Subtitulo maximo 255 caracteres',
              ],
              articuloRules: [
                  v => !!v || 'Articulo Requerido',
                  v => (v && v.length <= 65535) || 'Articulo maximo 65 535 caracteres',
              ],
              fotoRules: [
                v => (v && v.size <7000000) || 'Foto demasiado grande. Max 7 MB',
              ]
          }
        },
        methods:{
            ...mapActions(['addNota']),
            validateFoto(){
                if (this.foto.size > 7000000){
                    console.log("invalido")
                    this.valido = false
                }else{
                    console.log("valido")
                    this.valido = true
                }
            }
        },
        validations:{
            titulo:{required, maxLength:maxLength(255)},
            subtitulo: {required, maxLength:maxLength(255)},
            articulo: {required, maxLength:maxLength(65535)}
        },
        computed:{
            ...mapState(['cargando'])
        }
    }
</script>

<style scoped>
    #titulo{
        background-color: #202020;
    }
    .tarjeta{
        margin-top: 100px;
        border-radius: 54px 54px 54px 54px;
        box-shadow: -19px 20px 45px 0px rgba(17, 17, 17, 0.65);
        overflow: hidden;
    }
</style>