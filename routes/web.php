<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;

Route::get('/services/{id}', [ServiceDetailController::class, 'show']);

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');