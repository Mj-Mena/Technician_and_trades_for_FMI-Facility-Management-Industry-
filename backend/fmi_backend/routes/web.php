<?php

use App\Models\Company;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/api/employer', function () {
    $company_dd = Company::all();
    dd($company_dd);
});
