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
use PDF;

class ExportPdfController extends Controller
{
    public function export_detail_nilai()
    {
        return 'ok';
    }
    public function export_rapor($mengikuti_kelas_id, $murid_id, $semester)
    {



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

        $nilai_ekstrakulikuler = Mengikuti_ajaran_Ekstrakulikuler::with([
            'ekstrakurikuler'
        ])->where([
            ['nilai', '!=', 'tidak mengikuti'],
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id],
            ['semester', '=', $semester],
        ])->get();


        $detail_perolehan = [
            'jumlah' =>  Nilai_mapel::select([DB::raw('CAST(SUM((nilai_tugas+nilai_harian+nilai_semester)/3) AS UNSIGNED) as nilai')])->where([['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id], ['semester', '=', $semester]])->first()->nilai,
            'rata_rata' =>  Nilai_mapel::select([DB::raw('ROUND(AVG((nilai_tugas+nilai_harian+nilai_semester)/3),2) as nilai')])->where([['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id], ['semester', '=', $semester]])->first()->nilai,
            'peringkat' => 0,
        ];



        // return view('export_pdf.print_rapor', [
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

        // return [
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
        //     ]
        // ];

        $pdf = PDF::loadview('export_pdf.print_rapor', [
            'nilai_ekstrakulikuler' => $nilai_ekstrakulikuler,
            'detail_perolehan' => $detail_perolehan,
            'nilai' => $nilai,
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
        return $pdf->download('report.pdf');
    }
}
