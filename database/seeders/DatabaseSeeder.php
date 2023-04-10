<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
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
            'nama' => 'fahmi',
            'username' => 'fahmihwan',
            'password' => Hash::make('qweqwe123')
        ]);
        Kelas::factory(6)->create();
        Mapel::factory(10)->create();
        Tahun_ajaran::factory(3)->create();
        Murid::factory(5)->create();
    }
}
