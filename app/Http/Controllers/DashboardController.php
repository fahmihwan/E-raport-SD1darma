<?php

namespace App\Http\Controllers;

use App\Models\Ekstrakurikuler;
use App\Models\Guru;
use App\Models\Mapel;
use App\Models\Murid;
use App\Models\Tahun_ajaran;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // jumlah siswa terbanyak
        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->withTrashed()->first();
        return Inertia::render('Dashboard', [
            'stat' => [
                'total_murid' => Murid::doesntHave('perpindahans')->count(),
                'total_guru' => Guru::count(),
                'total_mapel' => Mapel::count(),
                'tahun_ajaran' => $tahun_ajaran  ? $tahun_ajaran->tahun_ajaran : 'belum tersedia',
                'tahun_ekstrakurikuler' => Ekstrakurikuler::count(),
            ],
            // 'jumlah murid terbanyak'
            // 'jumlah skor siswa terbanyak'

        ]);
    }
}
