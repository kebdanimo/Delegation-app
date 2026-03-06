<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atestation extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'type_atest_id',
        'status',
        'lien',
        'date_demande',
        'date',
        'matricule',

    ];

    public function typeAtestation()
    {
        return $this->belongsTo(Type_atestation::class);
    }
    public function utilisateure()
    {
        return $this->belongsTo(Utilisateur::class);
    }

}
