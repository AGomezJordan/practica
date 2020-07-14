<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

use \Firebase\JWT\JWT;
include_once "serverapi.php";

//Incluir todos los .php necesarios de la libreria
foreach ( glob(  './php-jwt-master/src/*.php') as $filename)
{
    require_once $filename;
}

//tratar datos

/*if (isset($_POST['jwt'])){
    echo '{"status": "ok jwt", "enviado": "'.$_POST['jwt'].'"}';
}else{
    echo '{"status": "nok jwt"}';
}*/

/*if (isset($_FILES['foto'])){
    @rename($_FILES['foto']['tmp_name'], "img/{$_FILES['foto']['name']}");
    echo '{"status": "ok foto", "ruta":"img/'.$_FILES['foto']['name'].'"}';
}else {
    echo '{"status": "nok foto"}';
}*/

if (isset($_REQUEST['jwt'])) {
    $key = "Alvaro1234@asdfgh"; //Clave privada

    try {//Manejamos errores

        //Decodificamos token, si la firma no fuera valida generaria una excepcion
        $decoded = JWT::decode($_REQUEST['jwt'], $key, array('HS256'));

        if (isset($decoded)) { //Si el token es valido

            if (isset($decoded->file)) {
                echo $decoded->file;
            }

            $time = time();
            $token = array(
                'exp' => $time + (60 * 60), // Tiempo que expirará el token (+1 hora)
                'data' => [ // información del usuario
                    'status' => true,
                    'nombre' => $decoded->nombre . "Desde PHP"
                ]
            );
            $jwt = JWT::encode($token, $key); //Generamos JWT
            $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
    } catch (\Firebase\JWT\ExpiredException $e) {
        $json = '{"status": false,"mensaje":"Token caducado DESDE PHP"}';
        echo $json;
    } catch (\Firebase\JWT\BeforeValidException $e) {
        $json = '{"status": false,"mensaje":"Before Valid DESDE PHP"}';
        echo $json;
    } catch (\Firebase\JWT\SignatureInvalidException $e) {
        $json = '{"status": false,"mensaje":"Datos posiblemente corruptos DESDE PHP"}';
        echo $json;
    } catch (Exception $e) { //Si los datos estuvieran corruptos
        $json = '{"status": false,"mensaje":"Ha surguido un problema DESDE PHP"}';
        echo $json;
    }
}