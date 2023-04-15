<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Mapel;
use App\Models\Mengajar_mapel;
use App\Models\Mengikuti_kelas;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NilaiPesertaDidikController extends Controller
{
    public function index()
    {

        $guru_id =  Auth::guard('webguru')->user()->id;
        $wali_kelas = Mengikuti_kelas::where('guru_id', $guru_id)->latest()->first()->kelas_id;

        $list_kelas_mapel = Mengajar_mapel::with(['mapel:id,nama', 'kelas:id,nama', 'guru:id,nama'])
            ->where('kelas_id', $wali_kelas)->get();

        return Inertia::render('NilaiPesertaDidik/Index', [
            'list_kelas_mapel' => $list_kelas_mapel
        ]);
    }

    public function detail_nilai_peserta_didik($kelas_id, $guru_id, $mapel_id, $semester)
    {

        $view_guru = Guru::select(['nip', 'nama'])->where('id', $guru_id)->first();

        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->first();

        // kelas, tahun ajaran, wali kelas
        $mengikuti_kelas_id = Mengikuti_kelas::where([
            ['kelas_id', '=', $kelas_id],
            ['tahun_ajaran_id', '=', $tahun_ajaran->id]
        ])->first();



        if (!$mengikuti_kelas_id) {
            return redirect()->back()->with('error_message', 'murid tidak tersedia');
        }


        // semester,  mapel, mengikuti_ajaran
        $datas = Nilai_mapel::with([
            'mengikuti_ajaran.murid:id,nama,no_induk'
        ])->where([
            ['semester', $semester],
            ['mapel_id', $mapel_id],
        ])->whereHas('mengikuti_ajaran', function ($q) use ($mengikuti_kelas_id) {
            $q->where('mengikuti_kelas_id', $mengikuti_kelas_id->id);
        })->get();


        return Inertia::render('NilaiPesertaDidik/List_nilai', [
            'datas' => $datas,
            'tahun_ajaran' => $tahun_ajaran,
            'semester' => $semester,
            'guru' => $view_guru,
            'mapel' => Mapel::where('id', $mapel_id)->first()->nama
        ]);
    }
}
