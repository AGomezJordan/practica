<template>
    <div class="container text-center">
        <br>
        <h2>¿Qué te pasará si estudias .net o angular?</h2><br>
        <form class="bg-dark text-light text-left p-4" @submit.prevent="p10(cod)">
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('ab')" type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Seras el mejor programad@r</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('32')" type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Ganarás muchisimo dinero</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('cx')" type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio3">Te mueres de hambre</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('45')" type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio4">Seras presi de EEUU</label>
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
            ...mapActions(['p10'])
        }
    }
</script>

<style scoped>
form{
    border-radius: 44px 44px 44px 44px;
}
</style>