<template>
    <div>
        <v-container>
            <v-card class="pa-8 text-justify tarjeta">
                <v-card-text><v-img :src="tarea.foto" aspect-ratio="2"></v-img></v-card-text>
                <v-card-title class="titulo">{{tarea.titulo}}</v-card-title>
                <v-card-subtitle class="subtitulo mt-1 black--text">
                    {{tarea.subtitulo}}
                </v-card-subtitle>
                <v-card-text class="articulo mt-2">
                    {{tarea.articulo}}
                </v-card-text>
                <v-card-subtitle>
                    Escrito por: {{tarea.usuario}}<br>
                    Fecha: {{tarea.fecha}}

                </v-card-subtitle>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "Tarea",
        data(){
            return{
                id: this.$route.params.id
            }
        },
        created() {
            this.getTarea(this.$route.params.id)
        },
        methods:{
            ...mapActions(['getTarea'])
        },
        computed:{
          ...mapState(['tarea'])
        }
    }
</script>

<style scoped>
.tarjeta{
    background-color: rgba(255, 255, 255, 0.92);
}
.titulo{
    font-size: 2.5em;
}
.subtitulo{
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2px;
}
.articulo{
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 30px;
}
</style>