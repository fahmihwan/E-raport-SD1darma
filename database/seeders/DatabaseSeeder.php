<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\DataDummy\CustomeSeeder;
use App\Helpers\CustomeSeeder as HelpersCustomeSeeder;
use App\Models\Admin;
use App\Models\Ekstrakurikuler;
use App\Models\Guru;
use App\Models\Kelas;
use App\Models\Mapel;
use App\Models\Murid;


use Illuminate\Database\Seeder;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;
use Seederku;

class DatabaseSeeder extends Seeder
{

    // public $data_guru;
    // public function __construct()
    // {
    //     $this->data_guru = new Seederku();
    // }
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

        $ekstrakulikulers = [
            ['nama' => 'Angklung',],
            [
                'nama' => 'Tahsin',
            ],
            [
                'nama' => 'Pramuka',
            ],
            [
                'nama' => 'Drumband',
            ],

        ];
        foreach ($ekstrakulikulers as $data) {
            Ekstrakurikuler::create($data);
        }

        $kelas = [
            [
                'nama' => 'KELAS 1',
            ],
            [
                'nama' => 'KELAS 2',
            ],
            [
                'nama' => 'KELAS 3',
            ],
            [
                'nama' => 'KELAS 4',
            ],
            [
                'nama' => 'KELAS 5',
            ],
            [
                'nama' => 'KELAS 6',
            ],
        ];

        foreach ($kelas as $data) {
            Kelas::create($data);
        }

        $mapels = [
            [
                'nama' => 'Pendidikan Agama dan Budi Pekerti',
                'kode_mapel' => 'MP001',
                'kkm' => '74',
            ],
            [
                'nama' => 'Pendidikan Pancasila',
                'kode_mapel' => 'MP002',
                'kkm' => '74',
            ],
            [
                'nama' => 'Bahasa Indonesia',
                'kode_mapel' => 'MP003',
                'kkm' => '74',
            ],
            [
                'nama' => 'Matematika',
                'kode_mapel' => 'MP004',
                'kkm' => '74',
            ],
            [
                'nama' => 'Bahasa Inggris',
                'kode_mapel' => 'MP005',
                'kkm' => '74',
            ],
            [
                'nama' => 'Ilmu Pengetahuan Alam dan Sosial',
                'kode_mapel' => 'MP006',
                'kkm' => '74',
            ],
            [
                'nama' => 'Pendidikan Jasmani, Olahraga, dan Kesehatan',
                'kode_mapel' => 'MP007',
                'kkm' => '74',
            ],
            [
                'nama' => 'Seni Rupa',
                'kode_mapel' => 'MP008',
                'kkm' => '74',
            ],
            [
                'nama' => 'Seni Musik',
                'kode_mapel' => 'MP009',
                'kkm' => '74',
            ],
            [
                'nama' => 'Bahasa Jawa',
                'kode_mapel' => 'MP010',
                'kkm' => '74',
            ],
            [
                'nama' => 'Membatik',
                'kode_mapel' => 'MP011',
                'kkm' => '74',
            ],
        ];
        foreach ($mapels as $data) {
            Mapel::create($data);
        }


        // $tahun_ajarans = [
        //     ['tahun_ajaran' => '2022/2023'],
        // ['tahun_ajaran' => '2021/2022'],
        // ['tahun_ajaran' => '2020/2021'],
        // ['tahun_ajaran' => '2019/2020'],
        // ];
        // foreach ($tahun_ajarans as $data) {
        //     Tahun_ajaran::create($data);
        // }


        $murids = HelpersCustomeSeeder::dataMurid();
        foreach ($murids as $data) {
            Murid::create($data);
        };

        $master_guru = HelpersCustomeSeeder::dataGuru();
        foreach ($master_guru as $data) {
            Guru::create($data);
        }

        // Mengikuti_kelas::create([
        //     'kelas_id' => '5',
        //     'tahun_ajaran_id' => '1',
        //     'guru_id' => '1',
        // ]);

        // Mengajar_mapel::create([
        //     'kelas_id' => '5',
        //     'guru_id' => '1',
        //     'mapel_id' => '8',
        // ]);

        // Mengikuti_ajaran::create([
        //     'mengikuti_kelas_id' => 1,
        //     'murid_id' => 1
        // ]);
        // Mengikuti_ajaran::create([
        //     'mengikuti_kelas_id' => 1,
        //     'murid_id' => 2
        // ]);
    }
}
