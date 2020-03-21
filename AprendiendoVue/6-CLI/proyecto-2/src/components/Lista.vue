<template>
    <div>
        <ul class="list-group">
            <li v-for="(item,index) of ordenado" @click="aumentar(index)" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn bg-danger text-light btn-block" @click="reiniciar">REINICIAR</button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        name: "Lista",
        computed:{
            ...mapState(['frutas']),
            ordenado(){
                return this.frutas.sort((a , b) => b.cantidad - a.cantidad)
            }
        },
        methods:{
            ...mapMutations(['aumentar', 'reiniciar'])
        }

    }
</script>