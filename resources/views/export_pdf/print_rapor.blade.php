<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<style>
    .header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    div.container table td,
    th {
        padding: 5px;
        border: 1px solid black;
    }

    div.container table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }

    .nilai-mapel-content {
        margin-bottom: 50px;
    }

    /* .nilai-kepribadian-content {
        } */
    .nilai-kepribadian-table {
        display: flex;
        justify-content: space-between;
    }
</style>

<body>
    <h1>Rapor</h1>

    <div class="header">
        <table>
            <tbody>
                <tr>
                    <td>Nama Siswa</td>
                    <td>: {{ $detailCard['data_murid']->murid->nama }}</td>
                </tr>
                <tr>
                    <td>Nomor Induk</td>
                    <td>: {{ $detailCard['data_murid']->murid->no_induk }}</td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td>Tahun Ajaran</td>
                    <td>: {{ $detailCard['tahun_ajaran'] }}</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>: {{ $detailCard['semester'] }}</td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td>: {{ $detailCard['kelas'] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container">
        <div class="nilai-mapel-content">
            <p>Nilai Mata pelajaran :</p>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Mata Pelajaran</th>
                        <th>KKM</th>
                        <th>Nilai Siswa</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($nilai as $d)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $d->mapel->nama }}</td>
                            <td>{{ $d->mapel->kkm }}</td>
                            <td>{{ $d->nilai }}</td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>JUMLAH</td>
                        <td></td>
                        <td></td>
                        <td>
                            {{ $detail_perolehan['jumlah'] }}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>RATA-RATA</td>
                        <td></td>
                        <td></td>
                        <td>
                            {{ $detail_perolehan['rata_rata'] }}
                        </td>
                    </tr>

                </tfoot>
            </table>
        </div>
        <div class="nilai-kepribadian-content">
            <p>Nilai Kepribadian:</p>
            <div class="nilai-kepribadian-table">
                <div style="width: 100%; margin-right: 10px">
                    <table>
                        <tbody>
                            <tr>
                                <td>Izin</td>
                                <td>{{ $nilai_kepribadian->izin }}</td>
                            </tr>
                            <tr>
                                <td>Sakit</td>
                                <td>{{ $nilai_kepribadian->sakit }}</td>
                            </tr>
                            <tr>
                                <td>Tanpa Keterangan</td>
                                <td>{{ $nilai_kepribadian->tanpa_keterangan }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="width: 100%">
                    <table>
                        <tbody>
                            <tr>
                                <td>Sikap</td>
                                <td>{{ $nilai_kepribadian->sikap }}</td>
                            </tr>
                            <tr>
                                <td>Kerajinan</td>
                                <td>{{ $nilai_kepribadian->kerajinan }}</td>
                            </tr>
                            <tr>
                                <td>Kebersihan dan kerapian</td>
                                <td>{{ $nilai_kepribadian->kebersihan_dan_kerapian }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="">
                <p>Nilai ekstrakurikuler : </p>
                <div className="col-md-6 border" style="height: 100px">
                    <table className="">
                        <tbody>
                            @foreach ($nilai_ekstrakulikuler as $d)
                                <tr className="text-lg">
                                    <td className="pr-4">
                                        {{ $d->ekstrakurikuler->nama }}
                                    </td>
                                    <td>{{ $d->nilai }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div style="display: flex; justify-content: space-evenly;">
                    <div style="margin-bottom: 100px">
                        <div style="border-bottom: 1px solid black; height: 150px; width: 200px;">
                            <p style="text-align: center">Orang Tua/Wali</p>
                        </div>
                    </div>
                    <div style="margin-bottom: 100px;">
                        <div
                            style="border-bottom: 1px solid black; height: 160px; width: 230px; display: flex; flex-direction: column">
                            <div
                                style=" 
                                    width: 100%;        

                                    ">

                                <div style="">.........., .....................</div>
                                <div style="">Wali Kelas</div>
                            </div>
                            <div
                                style="
                                display: flex; 
                                align-items:flex-end;
                                   justify-content;
                                   height: 100%;
                                   ">
                            </div>

                            <div
                                style="
                                display: flex; 
                                align-items:flex-end;
                                text-align: center;
                                   justify-content:center;">
                                {{-- IMAM KHOMSUN,S,T,,M.PD --}}
                            </div>
                        </div>
                        {{-- <div style="text-align: center; width: 100%;">NIP.
                            1975213123123</div> --}}
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly;">
                    <div style="margin-bottom: 100px;">
                        <div
                            style="border-bottom: 1px solid black; height: 150px; width: 240px; display: flex; flex-direction: column">
                            <div
                                style=" display: flex;
                                    width: 100%;        
                                   align-items:flex-start;
                                    justify-content: center; 
                                    ">
                                Mengetahui Kepala Sekolah
                            </div>
                            <div
                                style="
                                display: flex; 
                                align-items:flex-end;
                                   justify-content;
                                   height: 100%;
                                   ">
                                {{-- IMAM KHOMSUN,S,T,,M.PD --}}
                            </div>

                            <div
                                style="
                                display: flex; 
                                align-items:flex-end;
                                text-align: center;
                                   justify-content:center;">
                                IMAM KHOMSUN,S,T,,M.PD
                            </div>
                        </div>
                        <div style="text-align: center; width: 100%;">NIP.
                            1975213123123</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
