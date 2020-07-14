const vocales = ['a', 'e', 'i', 'o', 'u'] //vocales

//Solicitar regiones

//NO FUNCIONA PETICION A LA API.
/*let myHeaders = new Headers();
myHeaders.append('Authorization', 'Basic '+btoa('micoleAPI:M9^&yAzHTvVedh4='));


let myInit = { method: 'GET',
    headers: {
        user: 'micoleAPI',
        password: 'M9^&yAzHTvVedh4= '
    },
    mode: 'no-cors',
    credentials: 'include',
    cache: 'default' };

let data = fetch ('https://www.micole.net/api/regions/',myInit)
    .then(res => {
        console.log(data)
    })
    .then(json => {
        console.log(json)
    })*/

//JSON DEL API COPIADO EN CARPETA DATA
fetch ('data/regiones.json')
    .then(res=> res.json())
    .then(data => {
        //UNICAMENTE SE PODRA ELEGIR MADRID
        selectRegiones(data)
    })

//VOLVEMOS A PINTAR EL SELECT PARA SELECCIONAR OTRA REGION
let reiniciar = function(){
    fetch ('data/regiones.json')
        .then(res=> res.json())
        .then(data => {
            //UNICAMENTE SE PODRA ELEGIR MADRID
            selectRegiones(data)
        })
}


let selectRegiones = function(regiones){
    let divSelect = document.getElementById('contenidoSelect') //Div select

    //Creamos el HTML del select
    let cad = '<div class="regTitulo">\n' +
        '        SELECCIONA UNA REGION\n' +
        '    </div>\n' +
        '   <span class="mensajeInfo">* Por problemas de comunicación con el API solo será posible ' +
        'acceder a la infomación de la región de madrid. Disculpen las molestias *</span>'+
        '    <form>\n' +
        '        <select class="regiones" id="select" onchange="recogerDatosRegion(value)">'+
        '           <option selected="selected" disabled>Regiones....</option>'

    //Creamos un <OPTION> por cada region
    for(region of regiones){
        if (region.name === "Madrid") {
            cad += '<option value="' + region.id + '">' + region.name + '</option>'
        }else{
            cad += '<option value="' + region.id + '" disabled>' + region.name + '</option>'
        }
    }
    //
    cad+='</select></form>'
    //

    divSelect.innerHTML=cad; //Insertamos el HTML en el div del select
}

let recogerDatosRegion = function(id){
    //SE ACCEDERA A LOS DATOS DE LA REGION DE MADRID DESDE EL JSON GUARDADO
    //EN LA CARPETA DATA QUE HA SIDO COPIADO Y PEGADO DESDE LA API DE MICOLE.NET
    fetch ('data/madrid.json')
        .then(res=> res.json())
        .then(data => {
            mostrarRegion(data)
        })
        .catch(err => {
            console.log("Ha ocurrido un problema")
        })
}


let mostrarRegion = function (region){
    //COGEMOS DIV DONDE IRA LA TABLA CON LA INFO DE LA REGIÓN
    let div = document.getElementById('contenidoSelect')
    //EN CAD VAMOS ESCRIBIENDO EL HTML
    let cad = '<div><button type="button" class="btn btn-dark" onclick="reiniciar()"' +
        'style="background-color: #0086EA; color: #f4f5f7; border: none; margin-bottom: 20px"' +
        '>REINICIAR</button></div>'+
        '<div><table class="table table-hover">\n' +
        '        <thead class="thead-dark">\n' +
        '        <tr>\n' +
        '            <th scope="col">ID</th>\n' +
        '            <th scope="col">Nombre</th>\n' +
        '        </tr>\n' +
        '        </thead>'+
        '        <tbody>'

    //RECORREMOS CADA CIUDAD DE LA REGION SELECCIONADA
    for (ciudad of region){
        //COMPROBAMOS QUE LA ULTIMA LETRA DE LA CIUDAD SEA VOCAL
        for(vocal of vocales){
            if (ciudad.name[ciudad.name.length-1]=== vocal){
                cad+='<tr>'+
                    '<th scope="row">'+ciudad.id+'</th>'+
                    '<td>'+ciudad.name+'</td>'
            }
        }
    }
    cad+='</tbody></table></div>'

    div.innerHTML=cad
}