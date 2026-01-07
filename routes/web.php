<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/db-test', function () {
    return DB::select('SELECT * FROM leads');
});
Route::get('/users', [UserController::class, 'index']);

// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

// Route::post('/register', [AuthController::class, 'register'])->withoutMiddleware([\App\Http\Middleware\VerifyCsrfToken::class]);
// Route::post('/login', [AuthController::class, 'login'])->withoutMiddleware([\App\Http\Middleware\VerifyCsrfToken::class]);
Route::post('/register', [AuthController::class, 'register'])
    ->withoutMiddleware([VerifyCsrfToken::class]);

Route::post('/login', [AuthController::class, 'login'])
    ->withoutMiddleware([VerifyCsrfToken::class]);
