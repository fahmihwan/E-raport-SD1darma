<?php

namespace App\Http\Controllers;

use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Nilai_kepribadian;
use App\Models\Nilai_mapel;
use Illuminate\Http\Request;

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
        //     $mengikuti_kelas_id,
        //     $murid_id,
        // ];
        $mengikuti_ajaran_id = Mengikuti_ajaran::with('mengikuti_kelas.tahun_ajaran')->where([
            ['mengikuti_kelas_id', '=', $mengikuti_kelas_id],
            ['murid_id', '=', $murid_id],
        ])->first();


        $nilai_kepribadian = Nilai_kepribadian::where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id->id],
            ['semester', '=', $semester],
        ])->first();


        $nilai = Nilai_mapel::with(['mapel:id,nama,kkm'])->where([
            ['mengikuti_ajaran_id', '=', $mengikuti_ajaran_id->id],
        ])->where('semester', $semester)->get();



        // return view('export_pdf.print_rapor', [
        //     'nilai' => $nilai,
        //     'redirect_back' => [
        //         'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
        //         'murid_id' => $murid_id,
        //     ],
        //     'nilai_kepribadian' => $nilai_kepribadian,
        //     'detailCard' => [
        //         'tahun_ajaran' => Mengikuti_kelas::where('id', $mengikuti_kelas_id)->with('tahun_ajaran')->first()->tahun_ajaran->tahun_ajaran,
        //         'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id->id)->first(),
        //         'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id->id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
        //     ],
        // ]);


        $pdf = PDF::loadview('export_pdf.print_rapor', [
            'nilai' => $nilai,
            'redirect_back' => [
                'mengikuti_ajaran_id' => $mengikuti_ajaran_id,
                'murid_id' => $murid_id,
            ],
            'nilai_kepribadian' => $nilai_kepribadian,
            'detailCard' => [
                'semester' => $semester,
                'tahun_ajaran' => Mengikuti_kelas::where('id', $mengikuti_kelas_id)->with('tahun_ajaran')->first()->tahun_ajaran->tahun_ajaran,
                'data_murid' => Mengikuti_ajaran::with(['murid:id,nama,no_induk'])->where('id', $mengikuti_ajaran_id->id)->first(),
                'kelas' => Mengikuti_ajaran::where('id', $mengikuti_ajaran_id->id)->with(['mengikuti_kelas.kelas'])->first()->mengikuti_kelas->kelas->nama
            ],
        ]);
        return $pdf->download('report');
    }
}
