<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mengajar_mapel extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function mengikuti_kelas() //hapus
    {
        return $this->belongsTo(Mengikuti_kelas::class);
    }

    public function mapel()
    {
        return $this->belongsTo(Mapel::class);
    }

    public function kelas()
    {
        return $this->belongsTo(Kelas::class);
    }
    public function guru()
    {
        return $this->belongsTo(Guru::class);
    }
}
