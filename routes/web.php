<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::view('/admin/{any}', 'layouts.admin')->where('any', '.*');
Route::view('{any}', 'layouts.app')->where('any', '.*');

// Auth::routes();
Route::view('/admin', 'layouts.admin');
// Route::view('/admin/login', 'layouts.admin');
// Route::view('/login', 'layouts.app');
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
