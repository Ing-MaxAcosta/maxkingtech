<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

/*Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [HomeController::class, 'about']);
Route::get('/services', [HomeController::class, 'services']);
Route::get('/contact', [HomeController::class, 'contact']);
Route::post('/contact', [ContactController::class, 'submit']);*/