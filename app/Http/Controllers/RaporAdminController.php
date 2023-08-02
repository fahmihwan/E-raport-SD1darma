<?php

namespace App\Http\Controllers;

use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_ajaran_Ekstrakulikuler;
use App\Models\Mengikuti_kelas;
use App\Models\Murid;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        // return $datas;
        return Inertia::render('RaporAdmin/List_kelas', [
            'datas' => $datas
        ]);
    }
    public function detail_rapor($mengikuti_kelas_id, $murid_id, $semester)
    {


        $mengikuti_ajaran_id = Mengikuti_ajaran::with('mengikuti_kelas.tahun_ajaran')->where([
            ['mengikuti_kelas_id', '=', $mengikuti_kelas_id],
            ['murid_id', '=', $murid_id],
        ])->first()->id;
        // return [
        //     $mengikuti_ajaran_id,
        //     $semester
        // ];

        $nilai_kepribadian = Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->first();


        $nilai = Nilai_mapel::with(['mapel:id,nama,kkm'])
            ->select([
                "id",
                "semester",
                "mapel_id",
                "bantuan",
                "penguasaan",
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
            return 'beberapa guru belum melengkapi semua nilai rapor...';
        }

        $current_tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->id;
        $sortRanking = Mengikuti_ajaran::select([DB::raw('ROUND(AVG((nilai_tugas+nilai_harian+nilai_semester)/3),2) as nilai'), 'mengikuti_ajaran_id'])
            ->join('mengikuti_kelas', 'mengikuti_ajarans.mengikuti_kelas_id', '=', 'mengikuti_kelas.id')
            ->join('nilai_mapels', 'mengikuti_ajarans.id', '=', 'nilai_mapels.mengikuti_ajaran_id')
            ->groupBy('mengikuti_ajaran_id')
            ->orderBy('nilai', 'desc')
            ->where([
                ['nilai_mapels.semester', '=', $semester],
                ['tahun_ajaran_id', '=', $current_tahun_ajaran]
            ])
            ->get();

        $list_ranking = [];
        $i = 1;
        foreach ($sortRanking as $d) {
            $list_ranking[] = [
                'rank' => $i++,
                'nilai' => $d->nilai,
                'mengikuti_ajaran_id' => $d->mengikuti_ajaran_id
            ];
        }
        $get_ranking = 0;
        foreach ($list_ranking as $d) {
            if ($d['mengikuti_ajaran_id'] == $mengikuti_ajaran_id) {
                $get_ranking = $d['rank'];
            }
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



        return Inertia::render('RaporComponent/Detail_nilai_murid', [
            'var_get' => [
                'mengikuti_kelas_id' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->first()->mengikuti_kelas_id,
                'murid_id' => $card['data_murid']->murid->id,
                'semester' => $semester
            ],
            'detail_perolehan' => $detail_perolehan,
            'ranking' => $get_ranking,
            'nilai' => $nilai,
            'detailCard' => $card,
            'nilai_kepribadian' => $nilai_kepribadian,
            'nilai_ekstrakurikulers' => $nilai_ekstrakulikuler,
            'menu' => 'admin'
        ]);
    }
}
