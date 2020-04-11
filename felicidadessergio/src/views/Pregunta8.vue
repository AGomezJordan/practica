<template>
    <div class="container text-center">
        <br>
        <h2>¿Cuál es el segundo apellido de Adam?</h2><br>
        <form class="bg-dark text-light text-left p-4" @submit.prevent="p9(cod)">
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('7c')" type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Khouailid</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('32')" type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Baptiste</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('vb')" type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio3">Bendari</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('45')" type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio4">Campillo</label>
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
            ...mapActions(['p9'])
        }
    }
</script>

<style scoped>
form{
    border-radius: 44px 44px 44px 44px;
}
</style>