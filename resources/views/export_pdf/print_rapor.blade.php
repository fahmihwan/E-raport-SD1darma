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
                        <td>: {{$detailCard['data_murid']->murid->nama}}</td>
                    </tr>
                    <tr>
                        <td>Nomor Induk</td>
                        <td>: {{$detailCard['data_murid']->murid->no_induk}}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>Tahun Ajaran</td>
                        <td>: {{$detailCard['tahun_ajaran']}}</td>
                    </tr>
                    <tr>
                        <td>Semester</td>
                        <td>: {{$detailCard['semester']}}</td>
                    </tr>
                    <tr>
                        <td>Kelas</td>
                        <td>: {{$detailCard['kelas']}}</td>
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
                            <td>{{$loop->iteration}}</td>
                            <td>{{$d->mapel->nama}}</td>
                            <td>{{$d->mapel->kkm}}</td>
                            <td>{{$d->nilai}}</td>
                        </tr>
                        @endforeach
                      
                    </tbody>
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
                                    <td>{{$nilai_kepribadian->izin}}</td>
                                </tr>
                                <tr>
                                    <td>Sakit</td>
                                    <td>{{$nilai_kepribadian->sakit}}</td>
                                </tr>
                                <tr>
                                    <td>Tanpa Keterangan</td>
                                    <td>{{$nilai_kepribadian->tanpa_keterangan}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style="width: 100%">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Sikap</td>
                                    <td>{{$nilai_kepribadian->sikap}}</td>
                                </tr>
                                <tr>
                                    <td>Kerajinan</td>
                                    <td>{{$nilai_kepribadian->kerajinan}}</td>
                                </tr>
                                <tr>
                                    <td>Kebersihan dan kerapian</td>
                                    <td>{{$nilai_kepribadian->kebersihan_dan_kerapian}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
