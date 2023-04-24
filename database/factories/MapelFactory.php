<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mapel>
 */
class MapelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $kode = 1;
        return [
            'nama' => fake()->unique()->randomElement([
                'Pendidikan Agama',
                'Pendidikan Kewarganegaraan',
                'Bahasa Indonesia',
                'Matematika',
                'Ilmu Pengetahuan Alam',
                'Ilmu Pengetahuan Sosial',
                'Seni Budaya dan Keterampilan',
                'Pend. Jasmani Olah Raga dari Kesehatan',
                'Bahasa Jawa',
                'Bahasa Inggris',
            ]),
            'kkm' => 75,
            // 'kode_mapel' => 'MP00' . $kode++
            'kode_mapel' => 'MP' . str_pad($kode++, 3, "0", STR_PAD_LEFT)

        ];
    }
}
