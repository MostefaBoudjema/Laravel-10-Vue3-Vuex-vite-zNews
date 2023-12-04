<?php

use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => '\App\Http\Controllers\Api', 'as' => 'api.'], function () {

    Route::post('/login', [LoginController::class, 'login']);
    Route::apiResource('products', ProductsController::class);
});










// Route::group(['middleware' => ['auth:api'], 'namespace' => '\App\Http\Controllers\Api', 'as' => 'api.'], function () {