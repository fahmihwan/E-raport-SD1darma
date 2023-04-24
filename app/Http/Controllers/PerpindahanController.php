<?php

namespace App\Http\Controllers;

use App\Models\Mengajar_mapel;
use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Murid;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Perpindahan;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PerpindahanController extends Controller
{
    public function index()
    {
        // return Perpindahan::with('murid:id,nama,no_induk,jenis_kelamin')->latest()->paginate(5);
        return Inertia::render('Perpindahan/Index', [
            'datas' => Perpindahan::with('murid:id,nama,no_induk,jenis_kelamin')->latest()->paginate(5)
        ]);
    }
    public function create()
    {
        $murid = Murid::doesntHave('perpindahans')->latest()->get();
        return Inertia::render('Perpindahan/Create', [
            'murid' => $murid
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'murid_id' => 'required',
            'tahun' => 'required',
            'keterangan' => 'required',
        ]);
        Perpindahan::create($validated);
        return redirect('/admin/perpindahan');
    }
    public function destroy($id)
    {
        Perpindahan::destroy($id);
        return redirect()->back();
    }

    public function detail($id)
    {
        $datas = Mengikuti_kelas::with(['kelas:id,nama', 'tahun_ajaran:id,tahun_ajaran'])->whereHas('mengikuti_ajarans', function ($q) use ($id) {
            $q->where('murid_id', $id);
        })->get();

        return Inertia::render("Perpindahan/Detail", [
            'murid' => Murid::where('id', $id)->first(),
            'datas' => $datas
        ]);
    }

    public function detail_rapor($mengikuti_kelas_id, $murid_id)
    {

        $mengikuti_ajaran_id = Mengikuti_ajaran::with('mengikuti_kelas.tahun_ajaran')->where([
            ['mengikuti_kelas_id', '=', $mengikuti_kelas_id],
            ['murid_id', '=', $murid_id],
        ])->first();

        $nilai_kepribadian = Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id->id],
        ])->get();

        $nilai = Nilai_mapel::with(['mapel:id,nama,kkm'])->where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id->id],
        ])->get();

        return Inertia::render('Perpindahan/Detail_nilai_murid', [
            'nilai' => $nilai,
            'redirect_back' => [
                'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
                'murid_id' => $murid_id,
            ],
            'nilai_kepribadian' => $nilai_kepribadian,
            'detailCard' => [
                'tahun_ajaran' => Mengikuti_kelas::where('id', $mengikuti_kelas_id)->with('tahun_ajaran')->first()->tahun_ajaran->tahun_ajaran,
                'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id->id)->first(),
                'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id->id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
            ],
        ]);
    }
}
