(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d19bd4"],{1071:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"tarjeta"},[a("v-card",[a("v-card-text",{staticClass:"display-2 text-center white--text py-2",attrs:{id:"titulo"}},[t._v("EDITAR TAREA")]),a("v-form",{on:{submit:function(e){return e.preventDefault(),t.editarNota({titulo:t.$v.tarea.titulo.$model,subtitulo:t.$v.tarea.subtitulo.$model,articulo:t.$v.tarea.articulo.$model,foto:t.foto,id:t.id})}}},[a("v-card-text",[a("v-text-field",{attrs:{counter:"",label:"Titulo",required:"",rules:t.tituloRules},model:{value:t.$v.tarea.titulo.$model,callback:function(e){t.$set(t.$v.tarea.titulo,"$model",e)},expression:"$v.tarea.titulo.$model"}}),a("v-text-field",{attrs:{counter:"",label:"Subtitulo",required:"",rules:t.subRules},model:{value:t.$v.tarea.subtitulo.$model,callback:function(e){t.$set(t.$v.tarea.subtitulo,"$model",e)},expression:"$v.tarea.subtitulo.$model"}}),a("v-textarea",{attrs:{"auto-grow":"",rules:t.articuloRules,label:"Articulo",rows:"1",counter:""},model:{value:t.$v.tarea.articulo.$model,callback:function(e){t.$set(t.$v.tarea.articulo,"$model",e)},expression:"$v.tarea.articulo.$model"}}),a("v-file-input",{attrs:{label:"Foto",accept:"image/jpeg",rules:t.fotoRules},on:{change:function(e){return t.validateFoto()}},model:{value:t.foto,callback:function(e){t.foto=e},expression:"foto"}})],1),a("v-card-text",{staticClass:"text-center"},[t.$v.$invalid||!t.valido&&null!=t.foto?t._e():a("v-btn",{staticClass:"ma-3 success",attrs:{type:"submit"}},[t._v("EDITAR")]),a("v-btn",{staticClass:"ma-3 red white--text",attrs:{type:"reset"}},[t._v("REINICIAR")])],1)],1)],1)],1),a("Mensaje")],1)},r=[],i=a("5530"),u=a("b5ae"),l=a("2f62"),n=a("b4db"),s={name:"Add",components:{Mensaje:n["a"]},data:function(){return{valido:!0,id:this.$route.params.id,foto:null,tituloRules:[function(t){return!!t||"Titulo Requerido"},function(t){return t&&t.length<=255||"Titulo maximo 255 caracteres"}],subRules:[function(t){return!!t||"Subtitulo Requerido"},function(t){return t&&t.length<=255||"Subtitulo maximo 255 caracteres"}],articuloRules:[function(t){return!!t||"Articulo Requerido"},function(t){return t&&t.length<=65535||"Articulo maximo 65 535 caracteres"}],fotoRules:[function(t){return t&&t.size<7e6||"Foto demasiado grande. Max 7 MB"}]}},created:function(){this.getTarea(this.$route.params.id)},methods:Object(i["a"])({},Object(l["b"])(["editarNota","getTarea"]),{validateFoto:function(){this.foto.size>7e6?(console.log("invalido"),this.valido=!1):(console.log("valido"),this.valido=!0)}}),computed:Object(i["a"])({},Object(l["d"])(["tarea"])),validations:{tarea:{titulo:{required:u["required"],maxLength:Object(u["maxLength"])(255)},subtitulo:{required:u["required"],maxLength:Object(u["maxLength"])(255)},articulo:{required:u["required"],maxLength:Object(u["maxLength"])(65535)}}}},c=s,d=(a("b9d4"),a("2877")),v=a("6544"),b=a.n(v),m=a("8336"),f=a("b0af"),$=a("99d9"),x=a("a523"),p=a("23a7"),h=a("4bd4"),g=a("8654"),R=a("a844"),j=Object(d["a"])(c,o,r,!1,null,"7bcb39a5",null);e["default"]=j.exports;b()(j,{VBtn:m["a"],VCard:f["a"],VCardText:$["c"],VContainer:x["a"],VFileInput:p["a"],VForm:h["a"],VTextField:g["a"],VTextarea:R["a"]})},6854:function(t,e,a){},b9d4:function(t,e,a){"use strict";var o=a("6854"),r=a.n(o);r.a}}]);
//# sourceMappingURL=chunk-71d19bd4.2c3e7f83.js.map