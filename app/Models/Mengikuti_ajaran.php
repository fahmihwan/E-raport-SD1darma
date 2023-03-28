<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mengikuti_ajaran extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function murid()
    {
        return $this->belongsTo(Murid::class)->withTrashed();
    }
    public function nilai_mapels()
    {
        return $this->hasMany(Nilai_mapel::class);
    }
    public function mengikuti_kelas()
    {
        return $this->belongsTo(Mengikuti_kelas::class);
    }
    public function nilai_mapel()
    {
        return $this->hasOne(Nilai_mapel::class);
    }
}
