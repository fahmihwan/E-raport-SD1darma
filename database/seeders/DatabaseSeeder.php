<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Guru;
use App\Models\Kelas;
use App\Models\Mapel;
use App\Models\Murid;
use App\Models\Tahun_ajaran;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        Admin::create([
            'nama' => 'Septiani',
            'username' => 'septiani',
            'password' => Hash::make('qweqwe123')
        ]);
        Kelas::factory(6)->create();
        $mapels = [
            [
                'nama' => 'BAHASA INDONESIA',
                'kode_mapel' => 'MP001',
                'kkm' => '75'
            ],
            [
                'nama' => 'MATEMATIKA',
                'kode_mapel' => 'MP002',
                'kkm' => '70'
            ],
            [
                'nama' => 'IPA',
                'kode_mapel' => 'MP003',
                'kkm' => '75'
            ],
            [
                'nama' => 'IPS',
                'kode_mapel' => 'MP004',
                'kkm' => '73'
            ],
            [
                'nama' => 'BAHASA INGGRIS',
                'kode_mapel' => 'MP005',
                'kkm' => '70'
            ],
            [
                'nama' => 'SEJARAH INDONESIA',
                'kode_mapel' => 'MP006',
                'kkm' => '80'
            ],
            [
                'nama' => 'OLAHRAGA',
                'kode_mapel' => 'MP007',
                'kkm' => '80'
            ],
            [
                'nama' => 'PKN',
                'kode_mapel' => 'MP008',
                'kkm' => '85'
            ],
            [
                'nama' => 'AGAMA',
                'kode_mapel' => 'MP009',
                'kkm' => '90'
            ],
            [
                'nama' => 'BAHASA JAWA',
                'kode_mapel' => 'MP010',
                'kkm' => '87'
            ],
            [
                'nama' => 'SBK',
                'kode_mapel' => 'MP011',
                'kkm' => '78'
            ],
            [
                'nama' => 'Prakarya',
                'kode_mapel' => 'MP012',
                'kkm' => '79'
            ],
            [
                'nama' => 'Mulok',
                'kode_mapel' => 'MP013',
                'kkm' => '70'
            ]
        ];
        foreach ($mapels as $data) {
            Mapel::create($data);
        }

        // Tahun_ajaran::factory(3)->create();
        // $tahun_ajarans = [
        //     ['tahun_ajaran' => '2022/2023'],
        //     ['tahun_ajaran' => '2021/2022'],
        //     ['tahun_ajaran' => '2020/2021'],
        //     ['tahun_ajaran' => '2019/2020'],
        // ];
        // foreach ($tahun_ajarans as $data) {
        //     Tahun_ajaran::create($data);
        // }


        // Murid::factory(5)->create();
        $murids = [
            [
                'nama' => 'Randi Irawan',
                'no_induk' => '0073451808',
                'jenis_kelamin' => 'L',
                'tempat_lahir' => 'Lubuk Sepuh',
                'tanggal_lahir' => '2015-11-03',
                'agama' => 'Islam',
                'alamat' => 'Segoroyoso'
            ],
            [
                'nama' => 'Naila Yuwandita',
                'no_induk' => '0073451100',
                'jenis_kelamin' => 'P',
                'tempat_lahir' => 'Dusun Trini',
                'tanggal_lahir' => '2015-08-11',
                'agama' => 'Islam',
                'alamat' => 'Segoroyoso'
            ],
            [
                'nama' => 'Maya Listiani',
                'no_induk' => '0073451401',
                'jenis_kelamin' => 'P',
                'tempat_lahir' => 'Segoroyoso',
                'tanggal_lahir' => '2015-05-07',
                'agama' => 'Islam',
                'alamat' => 'Segoroyoso'
            ],
            [
                'nama' => 'Mesi Sesrianti',
                'no_induk' => '0073451404',
                'jenis_kelamin' => 'P',
                'tempat_lahir' => 'Peleret',
                'tanggal_lahir' => '2015-02-11',
                'agama' => 'Islam',
                'alamat' => 'Segoroyoso'
            ],
            [
                'nama' => 'Maulida Rahman',
                'no_induk' => '0073451301',
                'jenis_kelamin' => 'P',
                'tempat_lahir' => 'Peleret',
                'tanggal_lahir' => '2015-02-06',
                'agama' => 'Islam',
                'alamat' => 'Segoroyoso'
            ],
            [
                'nama' => 'Gio Saputra',
                'no_induk' => '00734511016',
                'jenis_kelamin' => 'L',
                'tempat_lahir' => 'Jln. Lama, Desa Kayu Agung, Gunung Kidul',
                'tanggal_lahir' => '2016-12-10',
                'agama' => 'Islam',
                'alamat' => 'Jln. Lama, Desa Kayu Agung, Gunung Kidul'
            ]
        ];
        foreach ($murids as $data) {
            Murid::create($data);
        }




        $master_guru = [
            [
                'nip' => '199309042020122013',
                'nama' => 'Sadiyono, S.Pd',
                'jenis_kelamin' => 'L',
                'username' => 'sadiyono',
                'password' => Hash::make('qweqwe123'),
                'alamat' => 'Desa Nganjuk, Rt.12 Bantul',
                'telp' => '082231124780',
            ],
            [
                'nip' => '199309042020122013',
                'nama' => 'Dita Ayuning Tyas, S.Pd',
                'jenis_kelamin' => 'P',
                'username' => 'dita',
                'password' => Hash::make('1234'),
                'alamat' => 'Nepi Pedukuhan Vll RT031 Rw014, Brosot, Galur, Kulon Progo',
                'telp' => '085389760022',
            ],
            [
                'nip' => '197010311993122001',
                'nama' => 'Eny Kurniawati, S.Pd',
                'jenis_kelamin' => 'P',
                'username' => 'eny',
                'password' => Hash::make('1234'),
                'alamat' => 'Perum Berlian Indah A7 Rt 20 Rw 7 Pandeyan, Umbulharjo, Yk',
                'telp' => '082279413277',
            ],
            [
                'nip' => '196308171764052006',
                'nama' => 'Panca Setiawan, S.Pd',
                'jenis_kelamin' => 'L',
                'username' => 'panca',
                'password' => Hash::make('1234'),
                'alamat' => 'Jln Pancasakti, Rt 5 rw 7 Pleret, Segoroyoso, Bantul',
                'telp' => '082256789490',
            ],
            [
                'nip' => '199309022025132013',
                'nama' => 'Ari Hidayaturrohmah, S.Ag',
                'jenis_kelamin' => 'L',
                'username' => 'ari',
                'password' => Hash::make('311200'),
                'alamat' => 'Purwowerjo, Rt.006, Wonolelo,Peleret,Bantul',
                'telp' => '081236770952',
            ],
            [
                'nip' => '198908132019022001',
                'nama' => 'Ainun Ainiyah, SPd',
                'jenis_kelamin' => 'P',
                'username' => 'ainun',
                'password' => Hash::make('311200'),
                'alamat' => 'Kerto Rt.6 Rw- Wonokromo, Peleret,Bantul',
                'telp' => '081266745270',
            ],
            [
                'nip' => '199309042020122013',
                'nama' => 'Zeti Sulistiyowati, M.Pd',
                'jenis_kelamin' => 'P',
                'username' => 'zeti',
                'password' => Hash::make('311200'),
                'alamat' => 'Dahromo 1 RT.006, Segoroyoso, Peleret, Bantul',
                'telp' => '085326790012',
            ],
            [
                'nip' => '198509182022212025',
                'nama' => 'Atika Suci Chomaryati, S.Pd.SD',
                'jenis_kelamin' => 'P',
                'username' => 'atika',
                'password' => Hash::make('311200'),
                'alamat' => 'Blawong RT.010, Segoroyoso, Peleret, Bantul',
                'telp' => '081267890011',
            ],
            [
                'nip' => '199702102020122005',
                'nama' => 'Nurul Fitri Hidayati, S.Pd',
                'jenis_kelamin' => 'P',
                'username' => 'nurul',
                'password' => Hash::make('311200'),
                'alamat' => 'Dahromo  RT.003, Segoroyoso, Peleret, Bantul',
                'telp' => '081276095212',
            ],
            [
                'nip' => '196304171984052001',
                'nama' => 'Prini, S.Pd',
                'jenis_kelamin' => 'P',
                'username' => 'prini',
                'password' => Hash::make('311200'),
                'alamat' => 'Sewon RT.10, Segoroyoso, Peleret, Bantul',
                'telp' => '085326790954',
            ],
            [
                'nip' => '1963043211983402001',
                'nama' => 'Muhammad Alam',
                'jenis_kelamin' => 'L',
                'username' => 'muhammad',
                'password' => Hash::make('311200'),
                'alamat' => 'Segoroyoso Rt.010 Rw-  Peleret Bantul',
                'telp' => '085266760978',
            ]
        ];

        foreach ($master_guru as $data) {
            Guru::create($data);
        }
    }
}


  // $master_guru = [
        //     [
        //         'nip' => '198507232005022001',
        //         'nama' => 'sadiyono',
        //         'jenis_kelamin' => 'L',
        //         'username' => 'sadiyono',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '08123123123'
        //     ],
        //     [
        //         'nip' => '198907232005022001',
        //         'nama' => 'jum',
        //         'jenis_kelamin' => 'P',
        //         'username' => 'jum',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '0812312323'
        //     ],
        //     [
        //         'nip' => '198507232005022002',
        //         'nama' => 'tutik',
        //         'jenis_kelamin' => 'P',
        //         'username' => 'tutik',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '081231232213'
        //     ],
        //     [
        //         'nip' => '199207232005052001',
        //         'nama' => 'lanjar',
        //         'jenis_kelamin' => 'L',
        //         'username' => 'lanjar',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '23232313'
        //     ],
        //     [
        //         'nip' => '199207232005052001',
        //         'nama' => 'mariaten',
        //         'jenis_kelamin' => 'P',
        //         'username' => 'mariaten',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '23232313'
        //     ],
        //     [
        //         'nip' => '200207232005052020',
        //         'nama' => 'sri',
        //         'jenis_kelamin' => 'P',
        //         'username' => 'sri',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '23232313'
        //     ],
        //     [
        //         'nip' => '201007232005052020',
        //         'nama' => 'afif',
        //         'jenis_kelamin' => 'L',
        //         'username' => 'afif',
        //         'password' => Hash::make('qweqwe123'),
        //         'alamat' => 'magetan',
        //         'telp' => '23232313'
        //     ],
        // ];