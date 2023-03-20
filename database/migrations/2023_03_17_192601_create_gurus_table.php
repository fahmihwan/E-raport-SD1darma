<?php

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
        Schema::create('gurus', function (Blueprint $table) {
            $table->id();
            $table->string('nip');
            $table->string('nama');
            $table->enum('jenis_kelamin', ['L', 'P']);
            $table->string('username');
            $table->string('password');
            $table->string('alamat');
            $table->string('telp');
            $table->foreignIdFor(Kelas::class)->unique()->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gurus');
    }
};
