<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Mapel;
use App\Models\Mengajar_mapel;
use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_ajaran_Ekstrakulikuler;
use App\Models\Mengikuti_kelas;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PenilaianController extends Controller
{
    public function index()
    {

        $kelas = Mengajar_mapel::with([
            // 'mengikuti_kelas.kelas:id,nama',
            // 'mengikuti_kelas:id,kelas_id',
            'kelas:id,nama',
            'mapel:id,nama',
        ])->where('guru_id',  Auth::guard('webguru')->user()->id)->get();



        return Inertia::render('Penilaian/Index', [
            'kelas' => $kelas
        ]);
    }

    public function list_nilai($kelas_id, $mapel_id, $semester)
    {
        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->first();

        $mengikuti_kelas_id = Mengikuti_kelas::where([
            ['kelas_id', '=', $kelas_id],
            ['tahun_ajaran_id', '=', $tahun_ajaran->id]
        ])->first();
        if (!$mengikuti_kelas_id) {
            return redirect()->back()->with('error_message', 'murid tidak tersedia');
        }

        // no induk ,nama, nilai
        $datas = Nilai_mapel::with([
            'mengikuti_ajaran.murid:id,nama,no_induk'
        ])->where([
            ['semester', $semester],
            ['mapel_id', $mapel_id],
        ])->whereHas('mengikuti_ajaran', function ($q) use ($mengikuti_kelas_id) {
            $q->where('mengikuti_kelas_id', $mengikuti_kelas_id->id);
        })->get();

        $kelas = Kelas::where('id', $kelas_id)->first()->nama;

        return Inertia::render('Penilaian/List_nilai', [
            'datas' => $datas,
            'tahun_ajaran' => $tahun_ajaran,
            'kelas_id' => $kelas_id,
            'mapel_id' => $mapel_id,
            'kelas_nama' => $kelas,
            'semester' => $semester
        ]);
    }

    public function create_nilai($kelas_id, $mapel_id, $semester)
    {
        $tahun_ajaran_id = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->first()->id;

        $mengikuti_kelas = Mengikuti_kelas::with([
            'guru:id,nip,nama',
            'mengikuti_ajarans.murid:id,nama,no_induk',
            'kelas:id,nama',
            'tahun_ajaran:id,tahun_ajaran'
        ])
            ->where([
                ['kelas_id', '=', $kelas_id],
                ['tahun_ajaran_id', '=', $tahun_ajaran_id]
            ])->first();



        return Inertia::render('Penilaian/Create_nilai', [
            'mengikuti_kelas' => $mengikuti_kelas,
            'mapel' => Mapel::where('id', $mapel_id)->first(),
            'semester' => $semester,
            'redirect_back' => [
                'kelas_id' => $kelas_id,
                'mapel_id' => $mapel_id,
                'semester' => $semester,
            ]
        ]);
    }


    public function store_nilai(Request $request)
    {
        $validated =   $request->validate([
            'data' => 'required',
            'semester' => 'required',
            'mapel_id' => 'required',
        ]);


        try {
            DB::beginTransaction();
            foreach ($validated['data'] as $item) {
                Nilai_mapel::create([
                    'semester' => $request->semester,
                    'mapel_id' => $request->mapel_id,
                    'mengikuti_ajaran_id' => $item['mengikuti_ajaran_id'],
                    'nilai_tugas' => $item['nilai_tugas'],
                    'nilai_harian' => $item['nilai_harian'],
                    'nilai_semester' => $item['nilai_semester'],
                ]);
            }
            DB::commit();
        } catch (\Throwable $th) {
            dd($th->getMessage());
        }

        return redirect("/guru/penilaian/{$request->kelas_id}/{$request->mapel_id}/{$request->semester}/list_nilai");
    }

    public function edit_nilai($kelas_id, $mapel_id, $semester)
    {

        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'DESC')->first();

        $mengikuti_kelas_id = Mengikuti_kelas::where([
            ['kelas_id', '=', $kelas_id],
            ['tahun_ajaran_id', '=', $tahun_ajaran->id]
        ])->first()->id;

        // no induk ,nama, nilai
        $datas = Nilai_mapel::with([
            'mengikuti_ajaran.murid:id,nama,no_induk'
        ])->where([
            ['semester', $semester],
            ['mapel_id', $mapel_id],
        ])->whereHas('mengikuti_ajaran', function ($q) use ($mengikuti_kelas_id) {
            $q->where('mengikuti_kelas_id', $mengikuti_kelas_id);
        })->get();

        $kelas = Kelas::where('id', $kelas_id)->first();


        // dd($datas);
        return Inertia::render('Penilaian/Edit_nilai', [
            'datas' => $datas,
            'mapel' => Mapel::where('id', $mapel_id)->first(),
            'semester' => $semester,
            'kelas' => $kelas
        ]);
    }

    public function update_nilai(Request $request)
    {

        $validated =   $request->validate([
            'data' => 'required',
            'semester' => 'required',
            'mapel_id' => 'required',
        ]);

        try {
            DB::beginTransaction();
            foreach ($validated['data'] as $item) {
                Nilai_mapel::where([
                    'mengikuti_ajaran_id' => $item['mengikuti_ajaran_id'],
                    'semester' => $request->semester,
                    'mapel_id' => $request->mapel_id,
                ])->update([
                    'nilai_tugas' => $item['nilai_tugas'],
                    'nilai_harian' => $item['nilai_harian'],
                    'nilai_semester' => $item['nilai_semester'],
                ]);
            }
            DB::commit();
        } catch (\Throwable $th) {
            dd($th->getMessage());
        }

        return redirect("/guru/penilaian/{$request->kelas_id}/{$request->mapel_id}/{$request->semester}/list_nilai");
    }
}
