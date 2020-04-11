<template>
    <div class="container text-center">
        <h1>HAS ACABADO</h1>
        <h5>
            Si todo ha ido bien, tu codigo es <span class="text-success">{{code}}</span>. Recuerda darle este
            codigo a Jari para que te diga si esta bien o no. Muchas felicidades esperamos que te haya gustado
        </h5>
        <router-link to="/"><button class="btn btn-dark">Volver a empezar</button></router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Final",
        computed: {
            ...mapState(['code'])
        }
    }
</script>

<style scoped>

</style>