<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use App\Models\Mapel;
use App\Models\Mengajar;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MengajarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = Tahun_ajaran::latest()->orderBy('tahun_ajaran', 'desc')->paginate(10);
        return Inertia::render('Mengajar/Index', [
            'datas' => $datas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated =   $request->validate([
            'tahun_ajaran_id' => 'required',
            'kelas_id' => 'required',
            'guru_id' => 'required',
            'mapel_id' => 'required',
        ]);

        Mengajar::create($validated);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $datas =  Guru::with(['kelas:id,nama', 'mengajar'])->latest()->get();
        // return $datas;

        return Inertia::render('Mengajar/List_guru', [
            'datas' => $datas,
            'tahun_id' => $id
        ]);
    }

    public function create_guru_mengajar($guru_id, $tahun_id)
    {

        $datas =  Mengajar::with(['kelas:id,nama', 'mapel:id,nama'])->latest()->get();

        $list_kelas = Kelas::latest()->orderBy('nama', 'desc')->get();
        $guru_detail = Guru::with('kelas:id,nama')->where('id', $guru_id)->latest()->first();

        $detail_tahun_ajaran = Tahun_ajaran::where('id', $tahun_id)->first()->tahun_ajaran;
        $list_mapel = Mapel::latest()->get();
        return Inertia::render('Mengajar/Create', [
            'guru_detail' => $guru_detail,
            'tahun_ajaran_detail' => $detail_tahun_ajaran,
            'list_kelas' => $list_kelas,
            'list_mapel' => $list_mapel,
            'tahun_ajaran_id' => $tahun_id,
            'datas' => $datas
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mengajar $mengajar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mengajar $mengajar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mengajar $mengajar)
    {
        //
    }
}
