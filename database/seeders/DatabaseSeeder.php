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




        // Admin::create([
        //     'nama' => 'fahmi',
        //     'username' => 'fahmihwan',
        //     'password' => Hash::make('qweqwe123')
        // ]);
        Kelas::factory(6)->create();
        Mapel::factory(10)->create();
        Tahun_ajaran::factory(3)->create();
        Murid::factory(5)->create();


        $master_guru = [
            [
                'nip' => '53232432',
                'nama' => 'sadiyono',
                'jenis_kelamin' => 'L',
                'username' => 'sadiyono',
                'password' => Hash::make('qweqwe123'),
                'alamat' => 'magetan',
                'telp' => '08123123123'
            ],
            [
                'nip' => '53232432',
                'nama' => 'jum',
                'jenis_kelamin' => 'P',
                'username' => 'jum',
                'password' => Hash::make('qweqwe123'),
                'alamat' => 'magetan',
                'telp' => '0812312323'
            ],
            [
                'nip' => '52344234123',
                'nama' => 'tutik',
                'jenis_kelamin' => 'P',
                'username' => 'tutik',
                'password' => Hash::make('qweqwe123'),
                'alamat' => 'magetan',
                'telp' => '081231232213'
            ],
            [
                'nip' => '51232138',
                'nama' => 'lanjar',
                'jenis_kelamin' => 'L',
                'username' => 'lanjar',
                'password' => Hash::make('qweqwe123'),
                'alamat' => 'magetan',
                'telp' => '23232313'
            ],
        ];

        foreach ($master_guru as $data) {
            Guru::create($data);
        }
    }
}
