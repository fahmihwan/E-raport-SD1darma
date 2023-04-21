<?php

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
        Schema::create('perpindahans', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Murid::class);
            $table->enum('keterangan', ['lulus', 'pindah']);
            $table->year('tahun');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perpindahans');
    }
};
