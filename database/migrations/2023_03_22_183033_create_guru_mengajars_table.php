<?php

use App\Models\Guru;
use App\Models\Kelas;
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
        Schema::create('guru_mengajars', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Kelas::class)->nullable();
            $table->foreignIdFor(Guru::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guru_mengajars');
    }
};
