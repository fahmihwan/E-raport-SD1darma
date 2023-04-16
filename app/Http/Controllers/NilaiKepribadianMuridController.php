<?php

namespace App\Http\Controllers;

use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NilaiKepribadianMuridController extends Controller
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

        return Inertia::render('NilaiKepribadian/Index', [
            'datas' => $mengikuti_ajaran,
        ]);
    }
    public function create_nilai_kepribadian($mengikuti_ajaran_id, $semester)
    {
        $card = [
            'tahun_ajaran' =>  Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->tahun_ajaran,
            'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id)->first(),
            'semester' => $semester,
            'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
        ];


        $nilai_if_exist = Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->exists();


        return Inertia::render('NilaiKepribadian/Create_nilai_kepribadian', [
            'detailCard' => $card,
            'semester' => $semester,
            'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
            'nilai_if_exist' => $nilai_if_exist
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "mengikuti_ajaran_id" => 'required',
            "semester" => 'required',
            "izin" => 'required',
            "sakit" => 'required',
            "tanpa_keterangan" => 'required',
            "sikap" => 'required',
            "kerajinan" => 'required',
            "kebersihan_dan_kerapian" => 'required',
        ]);

        Nilai_kepribadian::create($validated);
        return redirect('/guru/nilai-kepribadian/detail/' . $validated['mengikuti_ajaran_id'] . '/' . $validated['semester'] . '/detail_nilai_kepribadian');
    }

    public function detail_nilai_kepribadian($mengikuti_ajaran_id, $semester)
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
        // return $nilai_if_exist;

        return Inertia::render('NilaiKepribadian/Detail_nilai_kepribadian', [
            'detailCard' => $card,
            'semester' => $semester,
            'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
            'nilai_kepribadian' => $nilai_kepribadian
        ]);
    }
    public function edit_nilai_kepribadian($mengikuti_ajaran_id, $semester)
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


        return Inertia::render('NilaiKepribadian/Edit_nilai_kepribadian', [
            'detailCard' => $card,
            'semester' => $semester,
            'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
            'nilai_kepribadian' => $nilai_kepribadian
        ]);
    }
    public function update(Request $request)
    {
        $validated = $request->validate([
            "mengikuti_ajaran_id" => 'required',
            "semester" => 'required',
            "izin" => 'required',
            "sakit" => 'required',
            "tanpa_keterangan" => 'required',
            "sikap" => 'required',
            "kerajinan" => 'required',
            "kebersihan_dan_kerapian" => 'required',
        ]);

        Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $validated['mengikuti_ajaran_id']],
            ['semester', '=', $validated['semester']],
        ])->update($validated);

        return redirect('/guru/nilai-kepribadian/detail/' . $validated['mengikuti_ajaran_id'] . '/' . $validated['semester'] . '/detail_nilai_kepribadian');
    }
}
