<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mengikuti_ajaran_Ekstrakulikuler extends Model
{
    use HasFactory;
    protected $table = 'mengikuti_ajaran_ekstrakulikulers';
    protected $guarded = ['id'];

    public function ekstrakurikuler()
    {
        return $this->belongsTo(Ekstrakurikuler::class);
    }
}
