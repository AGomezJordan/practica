Vue.component('hijo',{
    template:
    `
<div>
    <button @click="$store.commit('aumentar')">+</button>
    <p>{{$store.state.numero}}</p>
</div>
`
})