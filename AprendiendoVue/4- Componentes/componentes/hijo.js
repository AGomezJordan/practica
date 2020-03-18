Vue.component('hijo', {
    template:
    `
    <div class="p-3 bg-success">
        <p>Componente hijo</p>
        <p>{{numero}}</p>
    </div>
    `,
    props:['numero'],
   data() {
       return {
           nombre: 'alvaro'
       }
   },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    }
});