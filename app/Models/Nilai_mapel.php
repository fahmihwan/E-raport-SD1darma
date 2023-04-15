<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nilai_mapel extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function mengikuti_ajaran()
    {
        return $this->belongsTo(Mengikuti_ajaran::class);
    }

    public function mapel()
    {
        return $this->belongsTo(Mapel::class);
    }
}
