<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail_conge extends Model
{
    use HasFactory;

    protected $fillable = [
        'detail_conge_id',
        'titre',
        'duree',
        'conge_id',
    ];

    public function conge()
    {
        return $this->belongsTo(Conge::class);
    }

}

