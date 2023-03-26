<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Guru_mengajar;
use App\Models\Kelas;
use App\Models\Mapel;
use App\Models\Mengajar_mapel;
use Illuminate\Http\Request;
use Inertia\Inertia;


class MengajarController extends Controller
{
    public function index()
    {
        $list_guru_mengajar = Guru::with([
            'mengajar_mapels.kelas:id,nama',
            'mengajar_mapels.mapel:id,nama',
        ])->latest()->get();
        return Inertia::render('Mengajar/Index', [
            'list_guru_mengajar' => $list_guru_mengajar
        ]);
    }


    // HAPUS
    // TB GURU MENGAJAR
    public function create_guru_mengajar()
    {
        $kelas = Kelas::orderBy('nama', 'DESC')->get();
        $guru = Guru::latest()->get();
        $mapel = Mapel::latest()->get();

        return Inertia::render('Mengajar/Create_guru_mengajar', [
            'kelas' => $kelas,
            'gurus' => $guru,
            'mapel' => $mapel
        ]);
    }

    // HAPUS
    // TB GURU MENGAJAR
    public function store_guru_mengajar(Request $request)
    {
        $validated = $request->validate([
            'guru_id' => 'required',
            'kelas_id' => 'required',
            'mapel_id' => 'required'
        ]);

        Mengajar_mapel::create($validated);
        // Guru_mengajar::create($validated);
        return redirect('/admin/mengajar');
    }

    // TB MENGAJAR_MAPEL
    public function create_mengajar_mapel($guru_mengajar_id)
    {
        // return $guru_mengajar_id;
        $kelas = Kelas::orderBy('nama', 'DESC')->get();
        $mapel = Mapel::latest()->get();
        $guru = Guru::where('id', $guru_mengajar_id)->first();

        $guru_mengajar = Mengajar_mapel::with([
            'kelas:id,nama',
            'mapel:id,nama'
        ])
            ->where('guru_id', $guru_mengajar_id)
            ->latest()
            ->get();

        // return $guru_mengajar;
        return Inertia::render('Mengajar/Create_mengajar_mapel', [
            'guru_mengajar' => $guru_mengajar,
            'mapel' => $mapel,
            'kelas' => $kelas,
            'guru' => $guru
        ]);
    }

    public function store_mengajar_mapel(Request $request)
    {
        $validated =   $request->validate([
            'kelas_id' => 'required',
            'mapel_id' => 'required',
            'guru_id' => 'required',
        ]);

        Mengajar_mapel::create($validated);
        return redirect()->back();
    }

    public function destroy_mengajar_mapel($id)
    {
        Mengajar_mapel::where('id', $id)->delete();

        return redirect()->back();
        // return [
        //     '1' => $guru_mengajar_id,
        //     '2' => $id,
        // ];
    }
}