<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password) // encrypt
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User registered successfully',
            'data' => $user
        ]);
    }

    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required'
    //     ]);

    //     $user = User::where('email', $request->email)->first();

    //     if (!$user || !Hash::check($request->password, $user->password)) {
    //         return response()->json([
    //             'status' => false,
    //             'message' => 'Invalid login details'
    //         ], 401);
    //     }

    //     return response()->json([
    //         'status' => true,
    //         'message' => 'Login successful',
    //         'data' => $user
    //     ]);
    // }
    public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    // if (!$token = auth()->attempt($credentials)) {
    //     return response()->json([
    //         'status' => false,
    //         'message' => 'Invalid login details'
    //     ], 401);
    // }
    if (!$token = JWTAuth::attempt($credentials)) {
        return response()->json([
            'status' => false,
            'message' => 'Invalid login details'
        ], 401);
    }

    return response()->json([
        'status' => true,
        'message' => 'Login successful',
        'token' => $token
    ]);
}
}
