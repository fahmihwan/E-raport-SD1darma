<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Guru extends Model
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
}
