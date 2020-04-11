<template>
    <div class="container text-center">
        <br>
        <h2>¿El/La profe que tanto nos marcó?</h2><br>
        <form class="bg-dark text-light text-left p-4" @submit.prevent="p2(cod)">
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('34')" type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Ana la de francés</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('f5')" type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Jose Manuel</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('3f')" type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio3">Paco Curro el butanero</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('ag')" type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio5">María la rubia</label>
            </div>
            <div class="custom-control custom-radio my-3 ml-3 py-3">
                <input @click="setCod('bg')" type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio4">Fátima</label>
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
            ...mapActions(['p2', 'resetear'])
        },
        created(){
            this.resetear()
        }
    }
</script>

<style scoped>
form{
    border-radius: 44px 44px 44px 44px;
}
</style>