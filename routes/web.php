<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.app');
});
// Route::get('/admin', function () {
//     return view('layouts.admin');
// });

Auth::routes();

Route::get('{any}', function () { return view('layouts.app');})->where('any', '.*');
// Route::get('{any}', function () { return view('layouts.admin');})->where('any', '.*');
