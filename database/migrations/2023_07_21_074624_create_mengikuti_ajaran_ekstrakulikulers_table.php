<?php

use App\Models\Ekstrakurikuler;
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
        Schema::create('mengikuti_ajaran_ekstrakulikulers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Mengikuti_ajaran::class);
            $table->foreignIdFor(Ekstrakurikuler::class);
            $table->enum('nilai', ['tidak mengikuti', 'A', 'B', 'C', 'D', 'E']);
            $table->enum('semester', [1, 2]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mengikuti_ajaran_ekstrakulikulers');
    }
};
