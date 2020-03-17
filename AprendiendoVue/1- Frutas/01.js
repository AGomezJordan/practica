const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'pera', cantidad: 10},
            {nombre: 'manzana', cantidad: 20},
            {nombre: 'platano', cantidad: 18},
            {nombre: 'naranja', cantidad: 25},
            {nombre: 'sandia', cantidad: 12},
            {nombre: 'melon', cantidad: 19}
        ],
        nuevafruta:"",
        total:0,
    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevafruta, cantidad: 0
            });
            this.nuevafruta = "";
        }
    },
    computed:{
        sumarFrutas (){
            this.total=0;
            for (fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});