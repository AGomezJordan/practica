<?php

use App\Http\Controllers\messagesController;

Route::get('/messages', [messagesController::class, 'index']);
Route::get('/messages/{id}', [messagesController::class, 'store']);

//ESTO ES UN APRUEBA
