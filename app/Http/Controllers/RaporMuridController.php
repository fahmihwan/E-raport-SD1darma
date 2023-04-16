<?php

namespace App\Http\Controllers;

use App\Models\Mapel;
use App\Models\Mengajar_mapel;
use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RaporMuridController extends Controller
{
    public function index()
    {

        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->first();
        $user_id = auth()->guard('webguru')->user()->id;
        $mengikuti_kelas = Mengikuti_kelas::where([
            'tahun_ajaran_id' => $tahun_ajaran->id,
            'guru_id' => $user_id
        ])->first();

        $mengikuti_ajaran =  Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('mengikuti_kelas_id', $mengikuti_kelas->id)->get();

        return Inertia::render('RaporMurid/Index', [
            'datas' => $mengikuti_ajaran,
        ]);
    }


    public function detail_nilai_murid($mengikuti_ajaran_id, $semester)
    {

        $card = [
            'tahun_ajaran' =>  Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->tahun_ajaran,
            'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id)->first(),
            'semester' => $semester,
            'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
        ];

        $nilai_kepribadian = Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->first();

        $nilai = Nilai_mapel::with(['mapel:id,nama,kkm'])->where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->get();

        return Inertia::render('RaporMurid/Detail_nilai_murid', [
            'nilai' => $nilai,
            'detailCard' => $card,
            'nilai_kepribadian' => $nilai_kepribadian
        ]);
    }
}
