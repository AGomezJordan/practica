<?php

use App\Http\Controllers\messagesController;

Route::get('/messages', [messagesController::class, 'index']);
Route::post('/messages',[messagesController::class, 'store']);
Route::get('/messages/{id}', [messagesController::class, 'show']);
Route::patch('/messages/{id}', [messagesController::class, 'update']);
Route::delete('/messages/{id}', [messagesController::class, 'destroy']);
