<?php

namespace App\Http\Controllers;

use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MengikutiController extends Controller
{
    public function index()
    {
        $tahun_ajarans =  Tahun_ajaran::latest()->get();

        return Inertia::render('Mengikuti/Index', [
            'tahun_ajarans' => $tahun_ajarans
        ]);
    }

    public function list_siswa($id)
    {
        return Inertia::render('Mengikuti/List_siswa');
    }

    public function create_siswa_baru()
    {
        return Inertia::render('Mengikuti/Create_siswa_baru');
    }
}
