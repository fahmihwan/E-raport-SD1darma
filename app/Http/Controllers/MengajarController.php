<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Guru_mengajar;
use App\Models\Kelas;
use App\Models\Mapel;
use App\Models\Mengajar_mapel;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function PHPUnit\Framework\returnSelf;

class MengajarController extends Controller
{
    public function index()
    {


        $list_guru_mengajar = Guru_mengajar::with([
            'kelas:id,nama',
            'guru:id,nama,nip',
            'mengajar_mapels.kelas:id,nama',
            'mengajar_mapels.mapel:id,nama'
        ])->latest()->get();
        return Inertia::render('Mengajar/Index', [
            'list_guru_mengajar' => $list_guru_mengajar
        ]);
    }


    // TB GURU MENGAJAR
    public function create_guru_mengajar()
    {
        $kelas = Kelas::orderBy('nama', 'DESC')->get();
        $guru = Guru::latest()->get();

        return Inertia::render('Mengajar/Create_guru_mengajar', [
            'kelas' => $kelas,
            'gurus' => $guru
        ]);
    }

    // TB GURU MENGAJAR
    public function store_guru_mengajar(Request $request)
    {
        $validated = $request->validate([
            'guru_id' => 'required',
        ]);
        $validated['kelas_id'] = $request->wali_kelas;

        Guru_mengajar::create($validated);
        return redirect('/admin/mengajar');
    }

    // TB MENGAJAR_MAPEL
    public function create_mengajar_mapel($guru_mengajar_id)
    {
        $kelas = Kelas::orderBy('nama', 'DESC')->get();

        $mapel = Mapel::latest()->get();


        $guru_mengajar = Guru_mengajar::with([
            'kelas:id,nama',
            'guru:id,nama,nip',
            'mengajar_mapels.kelas:id,nama',
            'mengajar_mapels.mapel:id,nama'
        ])
            ->where('id', $guru_mengajar_id)
            ->latest()->first();

        // return $guru_mengajar;
        return Inertia::render('Mengajar/Create_mengajar_mapel', [
            'guru_mengajar' => $guru_mengajar,
            'mapel' => $mapel,
            'kelas' => $kelas
        ]);
    }

    public function store_mengajar_mapel(Request $request)
    {
        $validated =   $request->validate([
            'kelas_id' => 'required',
            'mapel_id' => 'required',
            'guru_mengajar_id' => 'required',
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
