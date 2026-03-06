<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fonction extends Model
{
    use HasFactory;

    // protected $primaryKey = 'affect_id';
    // // public $incrementing = false;
    // protected $keyType = 'integer';

    public function utilisateur()
    {
        return $this->hasMany(Utilisateur::class);
    }
}
