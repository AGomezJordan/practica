<?php
function pintar($texto,$user){
    $cad='{';
    $cad.='"texto":"'.$texto.'",';
    $cad.='"usuario":"'.$user.'",';
    $cad.='"data":[';
    $cad.='{"value":"tres"},';
    $cad.='{"value":"cuatro"},';
    $cad.='{"value":"cinco"}';
    $cad.="]";
    $cad.='}';

    return $cad;
}