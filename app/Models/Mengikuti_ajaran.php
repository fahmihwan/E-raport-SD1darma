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
        return $this->belongsTo(Murid::class);
    }
}
