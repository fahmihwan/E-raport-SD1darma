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
        <h1>Nilai Peserta Didik</h1>

        <div class="header">
            <table>
                <tbody>
                    <tr>
                        <td>Guru</td>
                        <td>: jum</td>
                    </tr>
                    <tr>
                        <td>Nip</td>
                        <td>: 518012321</td>
                    </tr>
                    <tr>
                        <td>Mapel</td>
                        <td>: 518012321</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>Kelas</td>
                        <td>: kelas_5</td>
                    </tr>
                    <tr>
                        <td>Semester</td>
                        <td>: 1</td>
                    </tr>
                    <tr>
                        <td>Tahun ajaran</td>
                        <td>: 2021/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container">
            <div class="nilai-mapel-content">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>No Induk</th>
                            <th>Nama</th>
                            <th>Nilai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>agama</td>
                            <td>75</td>
                            <td>89</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>
