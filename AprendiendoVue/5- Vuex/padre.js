Vue.component('padre',{
    template:
    `
    <div>
        <h1>numero {{$store.state.numero}}</h1>
        <hijo></hijo>
    </div>
    `
})