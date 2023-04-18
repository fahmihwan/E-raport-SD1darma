<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mengikuti_kelas extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function kelas()
    {
        return $this->belongsTo(Kelas::class)->withTrashed();
    }
    public function tahun_ajaran()
    {
        return $this->belongsTo(Tahun_ajaran::class)->withTrashed();
    }

    public function mengikuti_ajarans()
    {
        return $this->hasMany(Mengikuti_ajaran::class)->withTrashed();
    }
    public function guru()
    {
        return $this->belongsTo(Guru::class)->withTrashed();
    }
}
