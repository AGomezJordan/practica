<template>
    <div class="container text-center">
        <h1>BUSCANDO EL REGALO DE SERGIO</h1>
        <P>
            Si señor, nos hemos juntado Jari, Adam, Julen, Ruben, Alvaro y Lalo (Tu inspiracion en la programacion) para
            darte tu regalo de una forma especial pese al arresto domiciliario. Personalmente espero que tardes horas
            en conseguirlo jajajajajaja.
            Bueno la movida consiste en que te hacemos preguntas y te damos opciones (Tipic tipo test). Cada pregunta
            te dara unos numeros que juntando el de todas las preguntas sera un codigo de verificacion que tendras que
            entregarselo a Jari para que te de tu regalo si es que tienes bien el codigo. La gracia?? que no vas a
            saber si las has contestado bien o mal. Cada opcion de cada pregunta tienen numeros DISTINTOS, lo que quiere
            decir es que si tienes solo una pregunta mal el codigo estará mal y no sabras que pregunta has fallado...
        </P>
        <h4>QUE COMIENCE EL JUEGO</h4>
        <router-link to="/pregunta1"><button class="btn btn-dark">COMENZAR :)</button></router-link>
    </div>
</template>

<script>
    import {mapActions}from 'vuex'
    export default {
        name: "Inicio",
        beforeCreate() {
            this.getPreguntas
        },
        methods:{
            ...mapActions(['getPreguntas'])
        }
    }
</script>

<style scoped>

</style>