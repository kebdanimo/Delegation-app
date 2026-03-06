<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actualite extends Model
{
    use HasFactory;


    protected $fillable = [
        'id',
        'titre',
        'discription',
        'article',
        'date',
        'link',
        'matricule',
        'created_at',
    ];
}
