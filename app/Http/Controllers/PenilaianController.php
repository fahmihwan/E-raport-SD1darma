<?php

namespace App\Http\Controllers;

use App\Models\Guru_mengajar;
use App\Models\Mengajar_mapel;
use App\Models\Mengikuti_kelas;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PenilaianController extends Controller
{
    public function index()
    {

        $mengajar_id = Guru_mengajar::where('id', Auth::guard('webguru')->user()->id)->first()->id;
        $kelas_id = Mengajar_mapel::where('guru_mengajar_id', $mengajar_id)->pluck('kelas_id');
        $kelas = Mengikuti_kelas::whereIn('kelas_id', $kelas_id)->get();
        return $kelas;
        return Inertia::render('Penilaian/Index', [
            'kelas' => $kelas
        ]);
    }
}
