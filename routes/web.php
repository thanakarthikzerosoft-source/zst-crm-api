<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

use App\Http\Controllers\LeadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::get('/db-test', function () {
    return DB::select('SELECT * FROM leads');
});
Route::get('/users', [UserController::class, 'index']);

// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register'])
    ->withoutMiddleware([VerifyCsrfToken::class]);

Route::post('/login', [AuthController::class, 'login'])
    ->withoutMiddleware([VerifyCsrfToken::class]);

    // Route::post('/leads', [LeadController::class, 'store']);
    // Route::get('/leads/{id}', [LeadController::class, 'show']);
    // Route::put('/leads/{id}', [LeadController::class, 'update']);
    // Route::delete('/leads/{id}', [LeadController::class, 'destroy']);

Route::get('/leads', [LeadController::class, 'index']);
Route::get('/leads/{id}', [LeadController::class, 'show']);

Route::post('/leads', [LeadController::class, 'store'])
    ->withoutMiddleware([VerifyCsrfToken::class]);

Route::put('/leads/{id}', [LeadController::class, 'update'])
    ->withoutMiddleware([VerifyCsrfToken::class]);

Route::delete('/leads/{id}', [LeadController::class, 'destroy'])
    ->withoutMiddleware([VerifyCsrfToken::class]);

