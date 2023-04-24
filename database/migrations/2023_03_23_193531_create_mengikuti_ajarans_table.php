<?php

use App\Models\Mengikuti_ajaran;
use App\Models\Mengikuti_kelas;
use App\Models\Murid;
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
        Schema::create('mengikuti_ajarans', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Mengikuti_kelas::class);
            $table->foreignIdFor(Murid::class);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mengikuti_ajarans');
    }
};
