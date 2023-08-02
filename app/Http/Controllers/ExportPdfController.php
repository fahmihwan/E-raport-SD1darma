<?php

namespace App\Http\Controllers;

use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_ajaran_Ekstrakulikuler;
use App\Models\Mengikuti_kelas;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use PDF;

class ExportPdfController extends Controller
{
    public function export_detail_nilai()
    {
        return 'ok';
    }
    public function export_rapor($mengikuti_kelas_id, $murid_id, $semester)
    {

        // return [
        //     ['mengikuti_kelas_id', '=', $mengikuti_kelas_id],
        //     ['murid_id', '=', $murid_id],
        // ];
        $mengikuti_ajaran_id = Mengikuti_ajaran::with('mengikuti_kelas.tahun_ajaran')->where([
            ['mengikuti_kelas_id', '=', $mengikuti_kelas_id],
            ['murid_id', '=', $murid_id],
        ])->first()->id;

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
            return 'tidak dapat di print, beberapa guru belum melengkapi semua nilai rapor... <script> setTimeout(() => {
                window.history.back();
            }, 3000); </script>';
        }

        $nilai_ekstrakulikuler = Mengikuti_ajaran_Ekstrakulikuler::with([
            'ekstrakurikuler'
        ])->where([
            ['nilai', '!=', 'tidak mengikuti'],
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->get();
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



        return view('export_pdf.print_rapor', [
            'nilai_ekstrakulikuler' => $nilai_ekstrakulikuler,
            'detail_perolehan' => $detail_perolehan,
            'nilai' => $nilai,
            'ranking' => $get_ranking,
            'redirect_back' => [
                'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
                'murid_id' => $murid_id,
            ],
            'nilai_kepribadian' => $nilai_kepribadian,
            'detailCard' => [
                'semester' => $semester,
                'tahun_ajaran' => Mengikuti_kelas::where('id', $mengikuti_kelas_id)->with('tahun_ajaran')->first()->tahun_ajaran->tahun_ajaran,
                'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id)->first(),
                'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
            ],
        ]);


        // $pdf = PDF::loadview('export_pdf.print_rapor', [
        //     'nilai_ekstrakulikuler' => $nilai_ekstrakulikuler,
        //     'detail_perolehan' => $detail_perolehan,
        //     'nilai' => $nilai,
        //     'redirect_back' => [
        //         'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
        //         'murid_id' => $murid_id,
        //     ],
        //     'nilai_kepribadian' => $nilai_kepribadian,
        //     'detailCard' => [
        //         'semester' => $semester,
        //         'tahun_ajaran' => Mengikuti_kelas::where('id', $mengikuti_kelas_id)->with('tahun_ajaran')->first()->tahun_ajaran->tahun_ajaran,
        //         'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id)->first(),
        //         'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
        //     ],
        // ]);
        // return $pdf->download('report.pdf');
    }
}
