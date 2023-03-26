<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Murid extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    // protected $casts = ['created_at' => 'datetime:l, d-m-Y'];
    protected $casts = ['tanggal_lahir' => 'datetime:d-m-Y'];

    public function mengikuti_ajarans()
    {
        return $this->hasMany(Mengikuti_ajaran::class);
    }
}
