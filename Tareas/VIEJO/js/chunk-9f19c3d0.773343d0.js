(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f19c3d0"],{"8f47":function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.cargando?a("v-container",{staticClass:"display-1 text-center"},[a("h3",[t._v("Cargando tus tareas :)")]),a("square-loader",{attrs:{color:"purple"}})],1):t._e(),t.tareas&&t.tareas[0]?t._e():a("v-container",[a("v-card",[a("v-card-text",[a("h1",[t._v("SIN TAREAS")]),a("h3",[t._v(" No tienes ninguna tarea. Porque no te animas a crear una "),a("router-link",{attrs:{to:"/add"}},[t._v("pulsando aquí")]),t._v(" :) ")],1)])],1)],1),t.tareas&&!t.cargando?a("v-container",[a("v-row",t._l(t.tareas,(function(e){return a("v-col",{attrs:{lg:"4",md:"6",cols:"12"}},[a("v-btn",{staticClass:"btnfloat",attrs:{elevation:"10",fab:"",color:"success"},on:{click:function(a){return t.edit(e.cod)}}},[a("span",{staticClass:"white--text"},[t._v("EDIT")])]),a("v-btn",{staticClass:"btnfloatDel",attrs:{elevation:"10",fab:"",color:"error"},on:{click:function(a){return t.dialogalertActive(e.cod)}}},[a("span",{staticClass:"white--text"},[t._v("DEL")])]),a("div",{staticClass:"tarjeta"},[a("v-card",{staticClass:"pa-5 tarea",attrs:{to:{name:"Tarea",params:{id:e.cod}}}},[a("v-card-text",[a("v-img",{attrs:{src:e.foto,"aspect-ratio":"1.7"}})],1),a("v-card-title",[t._v(t._s(e.titulo))]),a("v-card-subtitle",[t._v(t._s(e.subtitulo))])],1)],1)],1)})),1),a("Mensaje"),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:t.dialogalert,callback:function(e){t.dialogalert=e},expression:"dialogalert"}},[a("v-card",[a("v-card-title",{staticClass:"headline display-3"},[t._v("Piensalo dos veces...")]),a("v-card-text",[t._v(" ¿Seguro que quieres eliminar la tarea? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.del()}}},[t._v(" SI ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogalert=!1}}},[t._v(" NO ")])],1)],1)],1)],1)],1):t._e()],1)},n=[],o=a("5530"),c=a("2f62"),i=a("a18c"),s=a("b4db"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[a("div",{staticClass:"v-square",style:t.spinnerStyle})])},d=[],u={name:"SquareLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"50px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size}}}},f=u,v=(a("e79f"),a("2877")),b=Object(v["a"])(f,l,d,!1,null,null,null),p=b.exports,g={name:"Home",data:function(){return{dialogalert:!1,temporalID:""}},created:function(){this.getTareas()},components:{Mensaje:s["a"],SquareLoader:p},methods:Object(o["a"])({dialogalertActive:function(t){this.dialogalert=!0,this.temporalID=t},del:function(){this.dialogalert=!1,this.borrarTarea(this.temporalID),this.temporalID=""},edit:function(t){i["a"].push({name:"Edit",params:{id:t}})}},Object(c["b"])(["getTareas","borrarTarea"])),computed:Object(o["a"])({},Object(c["d"])(["tareas","cargando"]))},m=g,h=(a("fcdc"),a("6544")),S=a.n(h),_=a("8336"),j=a("b0af"),C=a("99d9"),y=(a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0"),a("ade3")),w=(a("4b85"),a("2b0e")),O=a("d9f7"),x=a("80d2"),k=["sm","md","lg","xl"],V=function(){return k.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),N=function(){return k.reduce((function(t,e){return t["offset"+Object(x["u"])(e)]={type:[String,Number],default:null},t}),{})}(),T=function(){return k.reduce((function(t,e){return t["order"+Object(x["u"])(e)]={type:[String,Number],default:null},t}),{})}(),q={col:Object.keys(V),offset:Object.keys(N),order:Object.keys(T)};function D(t,e,a){var r=t;if(null!=a&&!1!==a){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==a&&!0!==a?(r+="-".concat(a),r.toLowerCase()):r.toLowerCase()}}var I=new Map,E=w["a"].extend({name:"v-col",functional:!0,props:Object(o["a"])({cols:{type:[Boolean,String,Number],default:!1}},V,{offset:{type:[String,Number],default:null}},N,{order:{type:[String,Number],default:null}},T,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,n=e.children,o=(e.parent,"");for(var c in a)o+=String(a[c]);var i=I.get(o);return i||function(){var t,e;for(e in i=[],q)q[e].forEach((function(t){var r=a[t],n=D(e,t,r);n&&i.push(n)}));var r=i.some((function(t){return t.startsWith("col-")}));i.push((t={col:!r||!a.cols},Object(y["a"])(t,"col-".concat(a.cols),a.cols),Object(y["a"])(t,"offset-".concat(a.offset),a.offset),Object(y["a"])(t,"order-".concat(a.order),a.order),Object(y["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),I.set(o,i)}(),t(a.tag,Object(O["a"])(r,{class:i}),n)}}),A=a("a523"),L=a("169a"),B=a("adda"),z=a("0fd9"),M=a("2fa4"),J=Object(v["a"])(m,r,n,!1,null,"3655cb8f",null);e["default"]=J.exports;S()(J,{VBtn:_["a"],VCard:j["a"],VCardActions:C["a"],VCardSubtitle:C["b"],VCardText:C["c"],VCardTitle:C["d"],VCol:E,VContainer:A["a"],VDialog:L["a"],VImg:B["a"],VRow:z["a"],VSpacer:M["a"]})},e79f:function(t,e,a){"use strict";var r=a("8f47"),n=a.n(r);n.a},ebc4:function(t,e,a){},fcdc:function(t,e,a){"use strict";var r=a("ebc4"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-9f19c3d0.773343d0.js.map