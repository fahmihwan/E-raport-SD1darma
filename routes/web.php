<?php

use App\Http\Controllers\GuruController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\MapelController;
use App\Http\Controllers\Tahun_ajaranController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/admin/dashboard', function () {
    // return view('welcome');
    return Inertia::render('Dashboard');
});

Route::get('/admin/master/tahun_ajaran', [Tahun_ajaranController::class, 'index']);
Route::post('/admin/master/tahun_ajaran', [Tahun_ajaranController::class, 'store']);
Route::delete('/admin/master/tahun_ajaran/{id}', [Tahun_ajaranController::class, 'destroy']);

Route::get('/admin/master/kelas', [KelasController::class, 'index']);
Route::post('/admin/master/kelas', [KelasController::class, 'store']);
Route::delete('/admin/master/kelas/{id}', [KelasController::class, 'destroy']);

Route::get('/admin/master/mapel', [MapelController::class, 'index']);
Route::post('/admin/master/mapel', [MapelController::class, 'store']);
Route::delete('/admin/master/mapel/{id}', [MapelController::class, 'destroy']);

Route::resource('/admin/guru', GuruController::class);
