<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Murid;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MengikutiController extends Controller
{
    public function index()
    {

        $tahun_ajarans =  Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->get();
        return Inertia::render('Mengikuti/Index', [
            'tahun_ajarans' => $tahun_ajarans
        ]);
    }

    public function create_kelas_tahun_ajaran_baru()
    {
        $kelas = Kelas::orderBy('nama', 'DESC')->get();

        $tahun_ajarans = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->get();
        $gurus = Guru::latest()->get();

        return Inertia::render('Mengikuti/Create_kelas_tahun_ajaran_baru', [
            'kelas' => $kelas,
            'tahun_ajaran' => $tahun_ajarans,
            'gurus' => $gurus
        ]);
    }

    public function store_create_kelas_tahun_ajaran_baru(Request $request)
    {
        $validated = $request->validate([
            'kelas_id' => 'required',
            'tahun_ajaran_id' => 'required',
            'guru_id' => 'required'
        ]);

        Mengikuti_kelas::create($validated);
        return redirect('/admin/mengikuti');
    }



    // MENGIKUTI AJARAN
    public function list_siswa($id)
    {

        $datas = Mengikuti_kelas::with([
            'mengikuti_ajarans.murid',
            'kelas:id,nama',
            'tahun_ajaran:id,tahun_ajaran'
        ])->where('id', $id)->first();



        $murid = Murid::with('mengikuti_ajarans')
            ->whereNot(function ($q) use ($id) {
                $q->whereHas('mengikuti_ajarans', function ($q) use ($id) {
                    $q->where('mengikuti_kelas_id', $id);
                });
            })

            ->latest()->get();

        return Inertia::render('Mengikuti/List_siswa', [
            'datas' => $datas,
            'murid' => $murid,
            'mengikuti_kelas_id' => $id,
        ]);
    }

    public function store_mengikuti_ajaran(Request $request)
    {
        $validated = $request->validate([
            'murid_id' => 'required',
            'mengikuti_kelas_id' => 'required'
        ]);
        $validated['isLulus'] = false;
        Mengikuti_ajaran::create($validated);
        return redirect()->back();
    }

    public function destroy_mengikuti_ajaran($id)
    {
        Mengikuti_ajaran::destroy($id);
        return redirect()->back();
    }

    public function create_siswa_baru()
    {
        return Inertia::render('Mengikuti/Create_siswa_baru');
    }

    public function get_kelas_tahun_ajaran($id)
    {
        $datas =  Mengikuti_kelas::with([
            'kelas',
            'tahun_ajaran',
            'guru'
        ])
            ->where('tahun_ajaran_id', $id)
            ->get()->sortByDesc(function ($i) {
                return $i->kelas->max('nama');
            });
        return $datas;
    }
}
