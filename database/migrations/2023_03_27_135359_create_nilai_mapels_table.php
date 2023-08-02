<?php

use App\Models\Mapel;
use App\Models\Mengikuti_ajaran;
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
        Schema::create('nilai_mapels', function (Blueprint $table) {
            $table->id();
            $table->enum('semester', ['1', '2']);
            $table->foreignIdFor(Mapel::class);
            $table->foreignIdFor(Mengikuti_ajaran::class);
            $table->integer('nilai_tugas');
            $table->integer('nilai_harian');
            $table->integer('nilai_semester');
            $table->text('penguasaan')->nullable();
            $table->text('bantuan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nilai_mapels');
    }
};
