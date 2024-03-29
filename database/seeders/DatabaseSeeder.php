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


    public function run(): void
    {
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


        $murids = HelpersCustomeSeeder::dataMurid();
        foreach ($murids as $data) {
            Murid::create($data);
        };

        $master_guru = HelpersCustomeSeeder::dataGuru();
        foreach ($master_guru as $data) {
            Guru::create($data);
        }
    }
}
