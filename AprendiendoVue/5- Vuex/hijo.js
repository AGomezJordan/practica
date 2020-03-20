Vue.component('hijo',{
    template:
    `
<div>
    <button @click="aumentar">+</button>
    <button @click="disminuir(2)">-</button>
    <button @click="obtenerCursos">OBTENER CURSO</button>
    <ul v-for="item of cursos">
        <li>{{item.nombre}}</li>
    </ul>
    <p>{{numero}}</p>
</div>
    `,
    computed:{
        ...Vuex.mapState(['numero', 'cursos']),
    },
    methods:{
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
})