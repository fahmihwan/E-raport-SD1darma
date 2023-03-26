<?php

use App\Models\Guru;
use App\Models\Kelas;
use App\Models\Mapel;
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
        Schema::create('mengajar_mapels', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Kelas::class);
            $table->foreignIdFor(Guru::class);
            $table->foreignIdFor(Mapel::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mengajar_mapels');
    }
};
