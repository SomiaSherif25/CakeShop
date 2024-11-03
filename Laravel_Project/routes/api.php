<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [UserController::class, 'Login']);
Route::get('/allusers', [UserController::class, 'getAll']);
Route::post('/register', [UserController::class, 'Register']);
Route::view('/addproduct', 'product');
Route::post('/added', [ProductsController::class,'addproduct']);
Route::delete('/delete/{x}',[ProductsController::class, 'deleteproduct']);
Route::get('getall',[ProductsController::class, 'getall']);
// Route::get('select/{x}', [ProductsController::class, 'selectproduct']);
// Route::get('/update/{x}',[ProductsController::class,'selectproduct']);
Route::post('/update/{x}', [ProductsController::class, 'updateproduct']);