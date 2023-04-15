<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Murid>
 */
class MuridFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'nama' => fake()->unique()->randomElement(['fajar', 'rian', 'ahmad', 'nur', 'dimas']),
            'nama' => fake()->unique()->randomElement(['fajar', 'cipluk', 'tumbar', 'boncel', 'yahya']),
            'no_induk' => fake()->unique()->randomElement(['3707', '3708', '3709', '3710', '3711']),
            'jenis_kelamin' => 'L',
            'tempat_lahir' => fake()->randomElement(['Ponorogo', 'Magetan', 'Madiun']),
            'tanggal_lahir' => fake()->randomElement(['1999-07-11', '1999-11-12', '2000-02-11']),
            'agama' => fake()->randomElement([
                'Islam',
                'Protestan',
                'Katolik',
                'Hindu',
                'Budha',
                'Khonghucu',
            ]),
            'alamat' => 'Maospati',
        ];
    }
}
