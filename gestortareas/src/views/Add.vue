<template>
    <v-container>
        <v-card>
            <v-card-text class="display-2 text-center white--text py-2" id="titulo">AÑADIR NOTA</v-card-text>
            <v-form>
                <v-card-text>
                    <v-text-field
                            counter
                        label="Titulo"
                        required
                    ></v-text-field>
                    <v-text-field
                            counter
                            label="Subtitulo"
                            required
                    ></v-text-field>
                    <v-textarea
                            auto-grow
                            label="Articulo"
                            rows="1"
                            counter
                    ></v-textarea>

                </v-card-text>
                <v-card-text class="text-center">
                    <v-btn type="submit" class="ma-3 success">AÑADIR</v-btn>
                    <v-btn type="reset" class="ma-3 red white--text">REINICIAR</v-btn>
                </v-card-text>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Add"
    }
</script>

<style scoped>
    #titulo{
        background-color: #202020;
    }
</style>