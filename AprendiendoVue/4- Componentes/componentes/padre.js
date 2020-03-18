Vue.component('padre',{
    template:
    `
    <div class="p-5 bg-dark text-white">
        <h3>COMPONENTE PADRE: {{numeroPadre}}</h3>
        <button @click="numeroPadre++">SUMAR</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data (){
        return {
            numeroPadre: 0,
            nombrePadre: ""
        }
    }
})