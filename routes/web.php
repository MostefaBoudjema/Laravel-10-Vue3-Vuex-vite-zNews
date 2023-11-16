<?php

use Illuminate\Support\Facades\Route;

Route::view('/admin', 'layouts.admin');
Route::view('/admin/{any}', 'layouts.admin')->where('any', '.*');
Route::view('{any}', 'layouts.app')->where('any', '.*');

