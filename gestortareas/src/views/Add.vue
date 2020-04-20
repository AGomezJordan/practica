<template>
    <v-container>
        <div class="tarjeta">
        <v-card>
            <v-card-text class="display-2 text-center white--text py-2" id="titulo">AÑADIR NOTA</v-card-text>
            <v-form @submit.prevent="addNota({
                titulo: $v.titulo.$model,
                subtitulo: $v.subtitulo.$model,
                articulo: $v.articulo.$model
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
                </v-card-text>
                <v-card-text class="text-center">
                    <v-btn type="submit" class="ma-3 success" :disabled="$v.$invalid">AÑADIR</v-btn>
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
    import {mapActions, mapState, mapMutations} from 'vuex'
    import Mensaje from "../components/Mensaje";

    export default {
        name: "Add",
        components: {Mensaje},
        data(){
          return{
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
          }
        },
        methods:{
            ...mapActions(['addNota']),
            ...mapMutations(['setDialog']),
        },
        computed:{
            ...mapState(["mensaje", "mensaje2", "dialog"])
        },
        validations:{
            titulo:{required, maxLength:maxLength(255)},
            subtitulo: {required, maxLength:maxLength(255)},
            articulo: {required, maxLength:maxLength(65535)}
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