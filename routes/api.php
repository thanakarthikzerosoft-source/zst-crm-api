<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LeadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::get('/db-test', function () {
    return DB::select('SELECT * FROM leads');
});

Route::post('/test', function () {
    return 'CSRF OFF';
});

Route::get('/users', [UserController::class, 'index']);

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);
Route::middleware(['jwt.auth'])->group(function () { //jwt.aut is use to JWT

    Route::get('/leads', [LeadController::class, 'index']);
    Route::get('/leads/{id}', [LeadController::class, 'show']);

    Route::post('/leads', [LeadController::class, 'store']);

    Route::put('/leads/{id}', [LeadController::class, 'update']);

    Route::delete('/leads/{id}', [LeadController::class, 'destroy']);

});

