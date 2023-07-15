<?php

namespace App\Http\Controllers;

use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Murid;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RaporAdminController extends Controller
{
    public function index()
    {
        // Murid::doesntHave('perpindahans')->select(['id', 'nama', 'no_induk'])->get() //before


        // return        Murid::doesntHave('perpindahans')->select(['id', 'nama', 'no_induk'])->get();
        // Murid::doesntHave('perpindahans')->select(['id', 'nama', 'no_induk'])->get();
        return Inertia::render('RaporAdmin/Index', [
            'murid' => Murid::select(['id', 'nama', 'no_induk'])->withTrashed()->get()
        ]);
    }
    public function search_detail_rapor($murid_id)
    {

        $datas = Mengikuti_ajaran::with([
            'mengikuti_kelas.kelas:id,nama',
            'mengikuti_kelas.tahun_ajaran:id,tahun_ajaran',
        ])->where([
            ['murid_id', '=', $murid_id],
        ])->whereRelation('mengikuti_kelas', 'deleted_at', '=', null)
            ->get();

        return Inertia::render('RaporAdmin/List_kelas', [
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

        if (!$mengikuti_ajaran_id || !$nilai_kepribadian || !$nilai) {
            return 'false';
        }

        // dd($mengikuti_kelas_id);


        return Inertia::render('RaporAdmin/Detail_nilai_murid', [
            'nilai' => $nilai,
            'var_get' => [
                'mengikuti_kelas_id' => $mengikuti_kelas_id,
                'murid_id' => $murid_id,
            ],
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
