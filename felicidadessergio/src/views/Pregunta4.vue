<template>
    <div class="container text-center">
        <br>
        <h2>¿Cuál es la comida reglamentaria de todo estudiante ejemplar?</h2><br>
        <form class="bg-dark text-light text-left p-4" @submit.prevent="p5(cod)">
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('a4')" type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Colacao con tostadas</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('32')" type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Nesquik con galletas</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('g7')" type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio3">Cafe con tostadas</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('fh')" type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio4">Cafe con leche y croassant</label>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-success">SIGUIENTE PREGUNTA</button></div>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Pregunta1",
        data(){
            return{
                cod: 0
            }
        },
        methods:{
            setCod(num){
                this.cod = num;
            },
            ...mapActions(['p5'])
        }
    }
</script>

<style scoped>
form{
    border-radius: 44px 44px 44px 44px;
}
</style>