<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conge extends Model
{
    use HasFactory;

    protected $primaryKey = 'conge_id';
    // public $incrementing = false;
    // protected $keyType = 'string';

    protected $fillable = [
        'conge_id',
        'date_debut',
        'date_fin',
        'duree_global',
        'date_demande_annulation',
        'date_annulation',
        'Matricule',
        'type_conge_id',
    ];


    public function detail_conge()
    {
        return $this->hasMany(Detail_conge::class);
    }

}


