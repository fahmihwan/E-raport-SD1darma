<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Guru extends Authenticatable
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    protected $hidden = [
        'password',
    ];

    public function kelas()
    {
        return $this->belongsTo(Kelas::class);
    }

    public function mengajar_mapels()
    {
        return $this->hasMany(Mengajar_mapel::class);
    }
    public function mengikuti_kelas()
    {
        return $this->belongsTo(Mengikuti_kelas::class);
    }
}
