<?php

namespace App\Http\Controllers\Api;

use App\Product;
use App\Models\Products;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;

class ProductsController extends Controller
{
    public function index()
    {
        // dd('index');
        $products = new ProductResource(Products::all());
        // return $products;
        return response()->json([
            'products' => $products,
        ], 200);
    }

    public function show($id)
    {
        $Product = Products::with(['Product_status'])->findOrFail($id);
        return new ProductResource($Product);
    }

    public function store(StoreProductsRequest $request)
    {
        $Product = Products::create($request->all());

        return (new ProductResource($Product))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateProductsRequest $request, $id)
    {
        $Product = Products::findOrFail($id);
        $Product->update($request->all());


        return (new ProductResource($Product))
            ->response()
            ->setStatusCode(202);
    }
    
    public function destroy($id)
    {
        $Product = Products::findOrFail($id);
        $Product->delete();
        return response(null, 204);
    }
}
