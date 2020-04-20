<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <v-card>
                <v-card-title class="headline display-3">{{mensaje2}}</v-card-title>

                <v-card-text>
                    {{mensaje}}
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="setDialog(false)"
                    >
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    export default {
        name: "Mensaje",
        methods:{
            ...mapMutations(['setDialog']),
        },
        computed:{
            ...mapState(['mensaje', 'mensaje2', 'dialog'])
        }
    }
</script>

<style scoped>

</style>