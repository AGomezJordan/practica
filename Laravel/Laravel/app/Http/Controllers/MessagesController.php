<?php

namespace App\Http\Controllers;

use App\Mail\mensajeRecibido;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MessagesController extends Controller
{
    public function store(){
        $mensaje = request()->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'subject' => 'required',
            'content' => 'required| min:3',
        ],[
            'name.required' => 'Necesito tu nombre'
        ]);

        //Enviar email
        Mail::to('gomezjordan85@gmail.com')->queue(new mensajeRecibido($mensaje));

        return "Mensaje enviado";
    }
}
