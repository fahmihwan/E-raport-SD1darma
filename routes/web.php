<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

use App\Http\Controllers\EkstrakurikulerController;
use App\Http\Controllers\ExportPdfController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\MapelController;
use App\Http\Controllers\MengajarController;
use App\Http\Controllers\MengikutiController;
use App\Http\Controllers\MuridController;
use App\Http\Controllers\NilaiKepribadianMuridController;
use App\Http\Controllers\NilaiPesertaDidikController;
use App\Http\Controllers\PenilaianController;
use App\Http\Controllers\PerpindahanController;
use App\Http\Controllers\RaporAdminController;
use App\Http\Controllers\RaporMuridController;
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

Route::middleware(['isNotLogin'])->group(function () {
    Route::get('/', [AuthController::class, 'index'])->name('login');
    Route::resource('/admin/akun', AdminController::class);
    Route::post('/admin/auth/guru/login', [AuthController::class, 'authenticated_guru']);
    Route::post('/admin/auth/admin/login', [AuthController::class, 'authenticated_admin']);
    Route::post('/admin/auth/wali_kelas/login', [AuthController::class, 'authenticated_wali']);
});
// auth
Route::middleware(['isLogin'])->group(function () {

    Route::post('/admin/auth/admin/logout', [AuthController::class, 'logout_admin']);
    Route::post('/admin/auth/guru/logout', [AuthController::class, 'logout_guru']);

    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

    Route::get('/admin/master/tahun_ajaran', [Tahun_ajaranController::class, 'index']);
    Route::post('/admin/master/tahun_ajaran', [Tahun_ajaranController::class, 'store']);
    Route::delete('/admin/master/tahun_ajaran/{id}', [Tahun_ajaranController::class, 'destroy']);

    Route::get('/admin/master/kelas', [KelasController::class, 'index']);
    Route::post('/admin/master/kelas', [KelasController::class, 'store']);
    Route::delete('/admin/master/kelas/{id}', [KelasController::class, 'destroy']);

    Route::get('/admin/master/mapel', [MapelController::class, 'index']);
    Route::post('/admin/master/mapel', [MapelController::class, 'store']);
    Route::delete('/admin/master/mapel/{id}', [MapelController::class, 'destroy']);

    Route::get('/admin/master/ekstra', [EkstrakurikulerController::class, 'index']);
    Route::post('/admin/master/ekstra', [EkstrakurikulerController::class, 'store']);
    Route::delete('/admin/master/ekstra/{id}', [EkstrakurikulerController::class, 'destroy']);

    // guru
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

    // mengikuti kelas
    Route::get('/admin/mengikuti/{id}/mengikuti_kelas', [MengikutiController::class, 'edit_mengikuti_kelas']);
    Route::put('/admin/mengikuti/{id}/mengikuti_kelas', [MengikutiController::class, 'update_mengikuti_kelas']);
    Route::delete('/admin/mengikuti/{id}/mengikuti_kelas', [MengikutiController::class, 'destroy_mengikuti_kelas']);

    // perpindahan
    Route::get('/admin/perpindahan', [PerpindahanController::class, 'index']);
    Route::get('/admin/perpindahan/{id}/detail', [PerpindahanController::class, 'detail']);
    Route::get('/admin/perpindahan/{mengikuti_kelas_id}/{murid_id}/{semester}/detail_rapor', [PerpindahanController::class, 'detail_rapor']);
    Route::get('/admin/perpindahan/create', [PerpindahanController::class, 'create']);
    Route::post('/admin/perpindahan', [PerpindahanController::class, 'store']);
    Route::delete('/admin/perpindahan/{id}', [PerpindahanController::class, 'destroy']);

    Route::get('/admin/rapor-murid', [RaporAdminController::class, 'index']);
    Route::get('/admin/raport-murid/detail', [RaporAdminController::class, 'detail']);
    Route::get('/admin/rapor-murid/{mengikuti_kelas_id}/{murid_id}/{semester}/detail_rapor', [RaporAdminController::class, 'detail_rapor']);

    Route::get('/admin/rapor-murid/{murid_id}/detail', [RaporAdminController::class, 'search_detail_rapor']);


    // get_kelas_tahun_ajaran
    Route::get('/admin/get_kelas_tahun_ajaran/{id}', [MengikutiController::class, 'get_kelas_tahun_ajaran']);


    Route::get('/admin/rapor-murid', [RaporAdminController::class, 'index']);

    // penilain
    Route::get('/guru/penilaian', [PenilaianController::class, 'index']);
    Route::get('/guru/penilaian/{kelas_id}/{mapel_id}/{semster}/list_nilai', [PenilaianController::class, 'list_nilai']);
    Route::get('/guru/penilaian/{kelas_id}/{mapel_id}/{semester}/create_nilai', [PenilaianController::class, 'create_nilai']);
    Route::post('/guru/penilaian/store_nilai', [PenilaianController::class, 'store_nilai']);

    Route::get('/guru/penilaian/{kelas_id}/{mapel_id}/{semester}/edit_nilai', [PenilaianController::class, 'edit_nilai']);
    Route::put('/guru/penilaian', [PenilaianController::class, 'update_nilai']);

    Route::get('/guru/nilai-kepribadian', [NilaiKepribadianMuridController::class, 'index']);
    Route::get('/guru/nilai-kepribadian/{mengikuti_ajaran_id}/{semester}/create_nilai_kepribadian', [NilaiKepribadianMuridController::class, 'create_nilai_kepribadian']);
    Route::get('/guru/nilai-kepribadian/{mengikuti_ajaran_id}/{semester}/edit_nilai_kepribadian', [NilaiKepribadianMuridController::class, 'edit_nilai_kepribadian']);
    Route::get('/guru/nilai-kepribadian/detail/{mengikuti_ajaran_id}/{semester}/detail_nilai_kepribadian', [NilaiKepribadianMuridController::class, 'detail_nilai_kepribadian']);
    Route::post('/guru/nilai-kepribadian', [NilaiKepribadianMuridController::class, 'store']);
    Route::put('/guru/nilai-kepribadian', [NilaiKepribadianMuridController::class, 'update']);

    //LAPORAN
    // nilai peserta didik
    Route::get('/guru/nilai-peserta-didik', [NilaiPesertaDidikController::class, 'index']);
    Route::get('/guru/nilai-peserta-didik/{kelas_id}/{guru_id}/{mapel_id}/{semester}/detail_nilai_peserta_didik', [NilaiPesertaDidikController::class, 'detail_nilai_peserta_didik']);

    // rapor
    Route::get('/guru/rapor-murid', [RaporMuridController::class, 'index']);
    Route::get('/guru/rapor-murid/{mengikuti_ajaran_id}/{semester}/detail_nilai_murid', [RaporMuridController::class, 'detail_nilai_murid']);

    // GURU 
    Route::get('/guru/auth/edit_password', [GuruController::class, 'edit_password']);
    Route::put('/guru/auth/edit_password', [GuruController::class, 'update_password']);
});

// Route::post('/')

// });

Route::get('/demo/create', function () {
    return view('demo.create');
});

// `/export-rapor/${var_get?.mengikuti_kelas_id}/${var_get?.murid_id}/${var_get?.semester}/detail_rapor` admin
Route::get('/export-detail-nilai', [ExportPdfController::class, 'export_detail_nilai']);
Route::get('/export-rapor/{mengikuti_kelas_id}/{murid_id}/{semester}/detail_rapor', [ExportPdfController::class, 'export_rapor']);
