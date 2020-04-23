<template>
    <v-container>
        <div class="tarjeta">
        <v-card>
            <v-card-text class="display-2 text-center white--text py-2" id="titulo">EDITAR TAREA</v-card-text>
            <v-form @submit.prevent="editarNota({
                titulo: $v.tarea.titulo.$model,
                subtitulo: $v.tarea.subtitulo.$model,
                articulo: $v.tarea.articulo.$model,
                foto: foto,
                id: id
                })">
                <v-card-text>
                    <v-text-field
                        counter
                        label="Titulo"
                        required
                        v-model="$v.tarea.titulo.$model"
                        :rules="tituloRules"
                    ></v-text-field>
                    <v-text-field
                            counter
                            label="Subtitulo"
                            required
                            v-model="$v.tarea.subtitulo.$model"
                            :rules="subRules"
                    ></v-text-field>
                    <v-textarea
                            auto-grow
                            :rules="articuloRules"
                            label="Articulo"
                            rows="1"
                            counter
                            v-model="$v.tarea.articulo.$model"
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
                    <v-btn type="submit" class="ma-3 success" v-if="!$v.$invalid && (valido || foto==null)">EDITAR</v-btn>
                    <v-btn type="reset" class="ma-3 red white--text">REINICIAR</v-btn>
                </v-card-text>
            </v-form>
        </v-card>
        </div>
        <Mensaje></Mensaje>
    </v-container>
</template>

<script>
    import {required, maxLength} from 'vuelidate/lib/validators';
    import {mapActions, mapState} from 'vuex'
    import Mensaje from "../components/Mensaje";

    export default {
        name: "Add",
        components: {Mensaje},
        data(){
          return{
              valido: true,
              id: this.$route.params.id,
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
        created() {
            this.getTarea(this.$route.params.id)
        },
        methods:{
            ...mapActions(['editarNota', 'getTarea']),
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
        computed:{
            ...mapState(['tarea'])
        },
        validations:{
            tarea: {
                titulo: {required, maxLength: maxLength(255)},
                subtitulo: {required, maxLength: maxLength(255)},
                articulo: {required, maxLength: maxLength(65535)}
            }
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