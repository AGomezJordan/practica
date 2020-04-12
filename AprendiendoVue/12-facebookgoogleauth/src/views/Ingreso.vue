<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" class="text-sm-center">
                    <v-card>
                        <v-card-text
                            class="text-center display-1 text-uppercase white--text"
                            :class="{'green': !registro, 'black': registro}"
                        >
                            <span v-if="!registro">INGRESO</span>
                            <span v-if="registro">REGISTRO</span>
                        </v-card-text>
                        <v-card-text>
                            <v-btn block color="error" dark @click="google()">
                                <v-icon left dark>mdi-google</v-icon>
                                GOOGLE
                            </v-btn>
                            <v-btn block color="info" dark @click="facebook()">
                                <v-icon left dark>mdi-facebook</v-icon>
                                FACEBOOK
                            </v-btn>
                        </v-card-text>
                        <v-card-text v-if="!registro">
                            <v-btn block @click="registro = true">¿No tienes cuenta? Registrate aquí</v-btn>
                        </v-card-text>
                        <v-card-text v-if="registro">
                            <v-btn block @click="registro = false">¿Ya tienes cuenta? Inicie sesión</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {firebase, auth, db} from '@/firebase'
    import {mapMutations} from 'vuex'
    import router from '@/router'
    export default {
        name: "Ingreso",
        data(){
            return{
                registro: false
            }
        },
        methods:{
           async google(){
                const provider = new firebase.auth.GoogleAuthProvider();
                this.ingresar(provider)
            },
            async facebook(){
                const provider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().languageCode = 'es';
                this.ingresar(provider)
            },
            async ingresar(provider){
                try{
                    const resultado = await firebase.auth().signInWithPopup(provider);
                    const user = await resultado.user;

                    //Construir usuario
                    const usuario = {
                        nombre: user.displayName,
                        email: user.email,
                        uid: user.uid,
                        foto: user.photoURL
                    }

                    //Guardar en firestore
                    await db.collection('usuarios').doc(usuario.uid).set(usuario)
                    this.nuevoUsuario(usuario)
                    router.push({name: 'Home'})
                }catch (e) {
                    console.log(e)
                }
            },
            ...mapMutations(['nuevoUsuario'])
        }
    }
</script>

<style scoped>

</style>