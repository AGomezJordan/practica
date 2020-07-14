<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

use \Firebase\JWT\JWT;
include_once "clases/App.php";

//Incluir todos los .php necesarios de la libreria
foreach ( glob(  './php-jwt-master/src/*.php') as $filename)
{
    require_once $filename;
}

//tratar datos

if(isset($_REQUEST['jwt'])){
    $DATA = [];
    $key = "Alvaro1234@asdfgh"; //Clave privada

    try {//Manejamos errores

        //Decodificamos token, si la firma no fuera valida generaria una excepcion
        $decoded= JWT::decode($_REQUEST['jwt'], $key, array('HS256'));

        if (isset($decoded)){ //Si el token es valido
            $func = $decoded->func;
            switch ($func) {
                case 'signIn':
                case 'login':
                    if (isset($decoded->usuario) && isset($decoded->password)) {
                        $data['usuario'] = $decoded->usuario;
                        $data['password'] = $decoded->password;
                        new App($func, $data);
                    } else {
                        throw new Exception();
                    }
                    break;
                case "editTarea":
                    if (isset($decoded->usuarioID) && isset($decoded->titulo)
                        && isset($decoded->subtitulo) && isset($decoded->articulo)){
                        $data['usuarioID']=$decoded->usuarioID;
                        $data['titulo']=$decoded->titulo;
                        $data['subtitulo']=$decoded->subtitulo;
                        $data['articulo']=$decoded->articulo;
                        $data['cod']=$decoded->tarea;
                        new app($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case 'addNota':
                    if (isset($decoded->usuarioID) && isset($decoded->titulo)
                        && isset($decoded->subtitulo) && isset($decoded->articulo)){
                        $data['usuarioID']=$decoded->usuarioID;
                        $data['titulo']=$decoded->titulo;
                        $data['subtitulo']=$decoded->subtitulo;
                        $data['articulo']=$decoded->articulo;
                        new app($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case 'getTareas':
                    if(isset($decoded->usuarioID)){
                        $data['usuarioID']=$decoded->usuarioID;
                        new app($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case "getTarea":
                case "borrarTarea":
                    if (isset($decoded->tarea)){
                        $data['cod'] = $decoded->tarea;
                        $data['usuarioID']=$decoded->usuarioID;
                        new App($func, $data);
                    }else{
                        new Exception();
                    }
                    break;
            }


        }
    }catch (\Firebase\JWT\ExpiredException $e){
        $json = '{"status": false,"mensaje":"Token caducadoºº"}';
        echo $json;
    }catch (\Firebase\JWT\BeforeValidException $e){
        $json = '{"status": false,"mensaje":"Before Valid"}';
        echo $json;
    }catch (\Firebase\JWT\SignatureInvalidException $e) {
        $json = '{"status": false,"mensaje":"Datos posiblemente corruptos"}';
        echo $json;
    }catch (Exception $e){ //Si los datos estuvieran corruptos
        $json = '{"status": false,"mensaje":"Ha surguido un problema"}';
        echo $json;
    }
}else{
    echo '{"status": false, "mensaje": "JWT no recibido"}';
}