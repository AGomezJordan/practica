<template>
    <div>
        <h1>Galeria de Fotos</h1>
        <router-link :to="{name: 'fotos', params: {id : item}}" v-for="(item,index) of fotos" :key="index">
            <button>Foto: {{item}}</button>
        </router-link>
        <Foto />
        <button @click="anterior"><-</button>
        <button @click="home">Home</button>
        <button @click="siguiente">-></button>
    </div>
</template>

<script>
    import Foto from '@/components/fotografia.vue';
    export default {
        components:{
            Foto
        },
        data(){
            return{
                fotos: [1,2,3,4,5,6]
            }
        },
        methods:{
            home(){
                this.$router.push('/')
            },
            anterior(){
                this.$router.go(-1)
            },
            siguiente(){
                this.$router.go(1)
            }
        }
    }
</script>