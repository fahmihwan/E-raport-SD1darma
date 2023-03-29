<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\MapelController;
use App\Http\Controllers\MengajarController;
use App\Http\Controllers\MengikutiController;
use App\Http\Controllers\MuridController;
use App\Http\Controllers\PenilaianController;
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

Route::get('/', [AuthController::class, 'index']);
Route::resource('/admin/akun', AdminController::class);
Route::post('/admin/auth/', [AuthController::class, 'authenticated']);
Route::post('/admin/auth/logout', [AuthController::class, 'logout']);


Route::get('/admin/dashboard', function () {
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
Route::resource('/admin/murid', MuridController::class);

// transaksi
// guru-mengajar
Route::get('/admin/mengajar', [MengajarController::class, 'index']);
Route::get('/admin/mengajar/create_guru_mengajar', [MengajarController::class, 'create_guru_mengajar']);
Route::post('/admin/mengajar/guru_mengajar', [MengajarController::class, 'store_guru_mengajar']);
Route::get('/admin/mengajar/{guru_mengajar_id}/create_mengajar_mapel', [MengajarController::class, 'create_mengajar_mapel']);
Route::post('/admin/mengajar/mengajar_mapel', [MengajarController::class, 'store_mengajar_mapel']);
Route::delete('/admin/mengajar/mengajar_mapel/{id}', [MengajarController::class, 'destroy_mengajar_mapel']);

// mengikuti kelas
Route::get('/admin/mengikuti', [MengikutiController::class, 'index']);
Route::get('/admin/mengikuti/create_kelas_tahun_ajaran_baru', [MengikutiController::class, 'create_kelas_tahun_ajaran_baru']);
Route::post('/admin/mengikuti/create_kelas_tahun_ajaran_baru', [MengikutiController::class, 'store_create_kelas_tahun_ajaran_baru']);

// mengikuti ajaran
Route::get('/admin/mengikuti/{kelas_id}/list_siswa', [MengikutiController::class, 'list_siswa']);
Route::post('/admin/mengikuti/store_siswa_baru', [MengikutiController::class, 'store_mengikuti_ajaran']);
Route::delete('/admin/mengikuti/{id}/mengikuti_ajaran', [MengikutiController::class, 'destroy_mengikuti_ajaran']);

// get_kelas_tahun_ajaran
Route::get('/admin/get_kelas_tahun_ajaran/{id}', [MengikutiController::class, 'get_kelas_tahun_ajaran']);


// penilain
Route::get('/guru/penilaian', [PenilaianController::class, 'index']);
Route::get('/guru/penilaian/{kelas_id}/{mapel_id}/{semster}/list_nilai', [PenilaianController::class, 'list_nilai']);
Route::get('/guru/penilaian/{kelas_id}/{mapel_id}/{semester}/create_nilai', [PenilaianController::class, 'create_nilai']);
Route::post('/guru/penilaian/store_nilai', [PenilaianController::class, 'store_nilai']);

Route::get('/guru/penilaian/{kelas_id}/{mapel_id}/{semester}/edit_nilai', [PenilaianController::class, 'edit_nilai']);
Route::put('/guru/penilaian', [PenilaianController::class, 'update_nilai']);
