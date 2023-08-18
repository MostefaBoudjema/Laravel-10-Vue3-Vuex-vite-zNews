<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([ 'namespace' => '\App\Http\Controllers\Api', 'as' => 'api.'], function () {
// Route::group(['middleware' => ['auth:api'], 'namespace' => '\App\Http\Controllers\Api', 'as' => 'api.'], function () {
    Route::apiResource('products', ProductsController::class); // Make sure to provide the correct namespace for the controller
});
