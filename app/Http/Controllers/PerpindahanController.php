<?php

namespace App\Http\Controllers;

use App\Models\Mengajar_mapel;
use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_ajaran_Ekstrakulikuler;
use App\Models\Mengikuti_kelas;
use App\Models\Murid;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Perpindahan;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        // return $datas;

        return Inertia::render("Perpindahan/Detail", [
            'murid' => Murid::where('id', $id)->first(),
            'datas' => $datas
        ]);
    }

    public function detail_rapor($mengikuti_kelas_id, $murid_id, $semester)
    {

        $mengikuti_ajaran_id = Mengikuti_ajaran::with('mengikuti_kelas.tahun_ajaran')->where([
            ['mengikuti_kelas_id', '=', $mengikuti_kelas_id],
            ['murid_id', '=', $murid_id],
        ])->first()->id;


        $nilai_kepribadian = Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->get();

        $nilai = Nilai_mapel::with(['mapel:id,nama,kkm'])
            ->select([
                "id",
                "semester",
                "mapel_id",
                "mengikuti_ajaran_id",
                DB::raw('CAST((nilai_tugas+nilai_harian+nilai_semester)/3 AS UNSIGNED)  as nilai'),
                "created_at",
                "updated_at"
            ])
            ->where([
                ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
                ['semester', '=', $semester],
            ])
            ->get();


        if (!$mengikuti_ajaran_id || !$nilai_kepribadian || !$nilai) {
            return 'false';
        }

        $detail_perolehan = [
            'jumlah' =>  Nilai_mapel::select([DB::raw('CAST(SUM((nilai_tugas+nilai_harian+nilai_semester)/3) AS UNSIGNED) as nilai')])->where([['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id], ['semester', '=', $semester]])->first()->nilai,
            'rata_rata' =>  Nilai_mapel::select([DB::raw('ROUND(AVG((nilai_tugas+nilai_harian+nilai_semester)/3),2) as nilai')])->where([['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id], ['semester', '=', $semester]])->first()->nilai,
            'peringkat' => 0,
        ];

        $card = [
            'tahun_ajaran' =>  Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->tahun_ajaran,
            'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id)->first(),
            'semester' => $semester,
            'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
        ];
        $nilai_ekstrakulikuler = Mengikuti_ajaran_Ekstrakulikuler::with([
            'ekstrakurikuler'
        ])->where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->get();


        return Inertia::render('Perpindahan/Detail_nilai_murid', [
            'var_get' => [
                'mengikuti_kelas_id' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->with(['mengikuti_kelas.kelas'])->first()->id,
                'murid_id' => $card['data_murid']->murid->id,
                'semester' => $semester
            ],
            'detail_perolehan' => $detail_perolehan,
            'nilai' => $nilai,
            'detailCard' => $card,
            'nilai_kepribadian' => $nilai_kepribadian,
            'nilai_ekstrakurikulers' => $nilai_ekstrakulikuler
        ]);
    }
}
