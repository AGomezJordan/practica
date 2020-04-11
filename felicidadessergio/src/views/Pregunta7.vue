<template>
    <div class="container text-center">
        <br>
        <h2>¿A que hora dio a la luz Marina y con quien?</h2><br>
        <form class="bg-dark text-light text-left p-4" @submit.prevent="p8(cod)">
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('yu')" type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Sergio y Miska a las 7:05</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('b8')" type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Sergio y Ruben a las 6:45</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('gb')" type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio3">Sergio y Marina a las 6:30</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('o5')" type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio4">Sergio y Miska a las 6:35</label>
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
            ...mapActions(['p8'])
        }
    }
</script>

<style scoped>
form{
    border-radius: 44px 44px 44px 44px;
}
</style>