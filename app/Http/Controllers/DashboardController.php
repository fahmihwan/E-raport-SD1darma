<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Tahun_ajaran;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // $cek =  auth()->guard('webguru')->user()->id;
        // $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->id;

        // $auth_guru = null;
        // $guru = Auth::guard('webguru')->user();

        // $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->id;
        // $cekGuru = Guru::leftJoin('mengikuti_kelas', 'gurus.id', '=', 'mengikuti_kelas.guru_id')
        //     ->where([
        //         ['gurus.id', '=', $guru->id],
        //         ['tahun_ajaran_id', '=', $tahun_ajaran]
        //     ])
        //     ->first();


        return Inertia::render('Dashboard');
    }
}
