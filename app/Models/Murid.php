<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Murid extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];
    protected $casts = ['tanggal_lahir' => 'datetime:d-m-Y'];

    public function mengikuti_ajarans()
    {
        return $this->hasMany(Mengikuti_ajaran::class);
    }
    public function perpindahans()
    {
        return $this->hasMany(Perpindahan::class);
    }
}
