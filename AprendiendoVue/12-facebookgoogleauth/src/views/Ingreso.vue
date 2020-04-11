<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" class="text-sm-center">
                    <v-card>
                        <v-card-text class="text-center display-1 text-uppercase green white--text">
                            <span>INGRESO</span>
                        </v-card-text>
                        <v-card-text>
                            <v-btn block color="error" dark>
                                <v-icon left dark>mdi-google</v-icon>
                                GOOGLE
                            </v-btn>
                            <v-btn block color="info" dark>
                                <v-icon left dark>mdi-facebook</v-icon>
                                FACEBOOK
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Ingreso"
    }
</script>

<style scoped>

</style>