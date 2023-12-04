<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
        // Authentication passed...
        $user = Auth::user(); // Retrieve the authenticated user data
        return response()->json(['status' => 'success', 'user_infos' => $user]);
        }

        return response()->json(['status' => 'error', 'error' => 'Invalid credentials.']);
    }
}
