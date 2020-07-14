<?php /** @noinspection ALL */


class BBDD
{
    //ATRIBUTOS
    private $HOST="localhost";
    private $US="root";
    private $PW="";
    private $NOMBRE="gestortareas";
    private $cnn;

    //CONSTRUCTOR Y DESTRUCTOR
    function __construct(){
        @$this->cnn = new mysqli($this->HOST, $this->US, $this->PW, $this->NOMBRE);
        $this->cnn->query("SET NAMES 'utf8'");
    }

    function __destruct()
    {
        $this->cnn=null;
    }

    //FUNCIONES PARA USUARIOS

    function validarUsuario($user, $password){
        $rt=false;
        try{
            $sql="select * from usuarios where usuario='{$user}' and password='{$password}'";
            $result = $this->cnn->query($sql);

            if ($result){
                $rt = $result->fetch_assoc();
            }
        }catch (Exception $e){
            $rt = false;
        }
        return $rt;
    }

    function registrarUsuario($user, $password){
        $rt = false;
        try{
            $sql = "Insert into usuarios values('{$user}', '{$password}', '{$user}jdklasj')";
            $result = $this->cnn->query($sql);
            if ($this->cnn->affected_rows === 1){
                $rt = true;
            }
        }catch (Exception $e){
            $rt = false;
        }
        return $rt;
    }

    private function getUsuario($usuarioID){
        $rt = false;
        $sql = "select usuario from usuarios where usuarioID='{$usuarioID}'";
        $result = $this->cnn->query($sql);
        if ($result->num_rows ===1){
            $rt = $result->fetch_assoc();
        }
        return $rt;
    }

    //Funciones datos

    function addNota($userID, $titulo, $subtitulo, $articulo){
        $rt = false;
        $usuario = $this->getUsuario($userID);
        if ($usuario) {

            $sql = "SELECT max(cod) as cod from tareas";
            $result = $this->cnn->query($sql);
            if ($result->num_rows === 1){
                $cod = $result->fetch_assoc()['cod'] + 1;
            }else{
                $cod = 1;
            }

            if (isset($_FILES['foto'])){
                @rename($_FILES['foto']['tmp_name'], "img/{$_FILES['foto']['name']}");
                $foto = $_FILES['foto']['name'];
            }else{
                $foto = "default.jpg";
            }

            $sql = "insert into tareas values ('{$cod}','{$titulo}','{$subtitulo}','{$articulo}','2020-02-02', '{$foto}' ,'{$userID}')";
            $result = $this->cnn->query($sql);

            if ($this->cnn->affected_rows === 1){
                $rt = true;
            }
        }

        return $rt;
    }
    function getTareas($usuarioID){
        $rt = false;
        $sql= "select cod, foto, titulo, subtitulo from tareas where usuario = '{$usuarioID}'";
        $result = $this->cnn->query($sql);
        if($result){
            $tareas=[];
            $cont = 0;
            while (($row=$result->fetch_assoc())){
                $tareas[$cont]['cod'] = $row['cod'];
                $tareas[$cont]['foto'] = "http://makreim.000webhostapp.com/servidor/img/".$row['foto'];
                $tareas[$cont]['titulo'] = $row['titulo'];
                $tareas[$cont]['subtitulo'] = $row['subtitulo'];
                $cont++;
            }
            $rt = $tareas;
        }
        return $rt;
    }
    function getTarea($cod, $usuarioID){
        $rt = false;
        $sql = "select * from tareas where cod='{$cod}' and usuario='{$usuarioID}'";
        $result = $this->cnn->query($sql);
        if ($result->num_rows === 1){
            $rt = $result->fetch_assoc();
        }
        return $rt;
    }
    function borrarTarea($cod, $usuarioID){
        $rt = false;

        $sql = "Select foto from tareas where cod='{$cod}' and usuario='{$usuarioID}'";
        $resultado = $this->cnn->query($sql);
        if ($resultado){
            $foto = $resultado->fetch_assoc()['foto'];
            if ($foto !== 'default.jpg'){
                unlink('img/'.$foto);
            }
        }

        $sql = "delete from tareas where cod='{$cod}' and usuario='{$usuarioID}'";
        $result = $this->cnn->query($sql);
        if ($this->cnn->affected_rows === 1){
            $rt = true;
        }
        return $rt;
    }
    function editTarea($userID, $titulo, $subtitulo, $articulo, $cod){
        if (isset($_FILES['foto'])){
            @rename($_FILES['foto']['tmp_name'], "img/{$_FILES['foto']['name']}");
            $foto = $_FILES['foto']['name'];
        }
        $rt = false;
        if (isset($foto)){
            $sql = "update tareas set titulo='{$titulo}', subtitulo='{$subtitulo}', articulo='{$articulo}', foto='{$foto}'";
        }else{
            $sql = "update tareas set titulo='{$titulo}', subtitulo='{$subtitulo}', articulo='{$articulo}'";
        }
        $sql.= "where usuario='{$userID}' and cod='{$cod}'";
        $result = $this->cnn->query($sql);
        if ($this->cnn->affected_rows === 1){
            $rt = true;
        }
        return $rt;
    }

}