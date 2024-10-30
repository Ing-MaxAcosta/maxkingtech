<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceDetailController extends Controller
{
    public function show($id)
    {
        return view('ServiceDetail', ['id' => $id]);
    }
}
