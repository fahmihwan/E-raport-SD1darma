<?php

use App\Models\Guru;
use App\Models\Kelas;
use App\Models\Tahun_ajaran;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mengikuti_kelas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Kelas::class);
            $table->foreignIdFor(Tahun_ajaran::class);
            $table->foreignIdFor(Guru::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mengikuti_kelas');
    }
};
