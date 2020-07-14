<?php

// dominio.es = Route::get('/', function)
// dominio.es/contacto = Route::get('contacto', function)

Route::get('saludo/{nombre?}', function ($nombre = 'invitado'){
    return "Saludo $nombre";
});


