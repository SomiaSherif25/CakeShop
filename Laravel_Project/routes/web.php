<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;
use App\Http\Middleware\RoleCheck;
use App\Http\Controllers\UserController;
use App\Http\Middleware\UserAccess;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', [UserController::class, 'Login']);


    
Route::get('/login', function () {
    return view('login');
})->name('login');

Route::post('/login', [UserController::class,'Login'])->name('login');
 
Route::get('/register', function () {
    return view('register');
})->name('register');

Route::POST('/register', [UserController::class,'Register'])->name('register');

Route::get('logout',[UserController::class,'Logout'])->middleware('auth')->name('logout');

// Route::get('/home', [HomeController::class,'index'])->name('home');

// Route::get('/admin', function () {
//     return view('admin');
// });

// Route::middleware(['auth', 'user-access:user'])->group(function () {
//     Route::get('/home', [HomeController::class, 'index'])->name('home');
// });

// Route::get('/home', [HomeController::class, 'index'])->middleware(['auth', 'user-access:user']);
// Route::get('/admin', [HomeController::class, 'adminHome'])->middleware(['auth', 'user-access:admin']);

// Route::middleware(['auth', 'user-access:admin'])->group(function () {
//     Route::get('/admin',[HomeController::class,'adminHome'])->name('admin');
// });


Route::get('/user',function(){
    return view('user');
})->middleware(['auth', 'verified']);

Route::get('/user',function(){
    return view('user');
})->middleware(['auth', 'verified'])->name('user'); 

Route::get('/home', [HomeController::class, 'index']);