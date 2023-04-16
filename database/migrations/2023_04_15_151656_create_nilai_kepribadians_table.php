<?php

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
        Schema::create('nilai_kepribadians', function (Blueprint $table) {
            $table->id();
            $table->integer('izin');
            $table->integer('sakit');
            $table->integer('tanpa_keterangan');
            $table->enum('sikap', ['A', 'B', 'C', 'D', 'E']);
            $table->enum('kerajinan', ['A', 'B', 'C', 'D', 'E']);
            $table->enum('kebersihan_dan_kerapian', ['A', 'B', 'C', 'D', 'E']);
            $table->foreignIdFor(Mengikuti_ajaran::class);
            $table->enum('semester', [1, 2]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nilai_kepribadians');
    }
};
