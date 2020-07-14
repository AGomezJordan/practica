<?php
require_once "BBDD.php";
use \Firebase\JWT\JWT;

//Incluir todos los .php necesarios de la libreria
foreach ( glob(  './php-jwt-master/src/*.php') as $filename)
{
    require_once $filename;
}

class App
{
    private $cnn;
    private $data;
    private $key ="Alvaro1234@asdfgh";

    function __construct($func, $data){
        $this->cnn= new BBDD();
        $this->data = $data;
        switch ($func){
            case "login":
                $this->login();
                break;
            case "signIn":
                $this->signIn();
                break;
            case 'addNota':
                $this->addNota();
                break;
            case 'getTareas':
                $this->getTareas();
                break;
            case 'getTarea':
                $this->getTarea();
                break;
            case 'borrarTarea':
                $this->borrarTarea();
                break;
            case 'editTarea':
                $this->editTarea();
                break;

        }
    }

    //FUNCIONES USUARIO
    private function login(){
        $result = $this->cnn->validarUsuario($this->data['usuario'], $this->data['password']);
        if ($result){
            $token = array(
                'status' => true,
                'login'=> true,
                'data' => [
                    'usuarioID' => $result['usuarioID'],
                    'tipo' => 'admin'
                ]
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }else{
            $token = array(
                'status' => true,
                'login'=> false,
                'mensaje' => "Usuario o contraseña Incorrecto"
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
       }
    private function signIn(){
        $result = $this->cnn->registrarUsuario($this->data['usuario'], $this->data['password']);
        if ($result){
            $token = array(
              'status' => true,
              'signIn' => true
            );
        }else{
            $token = array(
                'status' => true,
                'signIn' => false
            );
        }
           $jwt = JWT::encode($token, $this->key); //Generamos JWT
           $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
           echo $json;
       }

    //FUNCIONES NOTA
    private function addNota(){
        $result = $this->cnn->addNota($this->data['usuarioID'],$this->data['titulo'],
        $this->data['subtitulo'],$this->data['articulo']);

        if ($result){
            $token = array(
                'status' => true,
                'insert' => true,
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }else{
            $token = array(
                'status' => true,
                'insert' => false,
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
    }
    private function getTareas(){
        $result = $this->cnn->getTareas($this->data['usuarioID']);
        if ($result){
            $token = array(
                'status' => true,
                'data' => $result
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }else{
            echo '{"status": true}';
        }
    }
    private function getTarea(){
        $result = $this->cnn->getTarea($this->data['cod'], $this->data['usuarioID']);
        if ($result){
            if (isset($result['foto'])) {
                $result['foto'] = "http://makreim.000webhostapp.com/servidor/img/" . $result['foto'];
            }
            $token = array(
                'status' => true,
                'data' => $result
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
    }
    private function borrarTarea(){
        $result = $this->cnn->borrarTarea($this->data['cod'], $this->data['usuarioID']);
        if ($result){
            $token = array(
                'status' => true,
                'borrado' => true
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }else{
            $token = array(
                'status' => true,
                'borrado' => false
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
    }
    private function editTarea(){
        $result = $this->cnn->editTarea($this->data['usuarioID'],$this->data['titulo'],
            $this->data['subtitulo'],$this->data['articulo'], $this->data['cod']);
        if ($result){
            $token = array(
                'status' => true,
                'edit' => true,
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }else{
            $token = array(
                'status' => true,
                'edit' => false,
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
    }
}