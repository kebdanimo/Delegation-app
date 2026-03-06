<?php

namespace App\Models;

use App\Models\Droit;
use App\Models\Utilisateur;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasFactory;

    public function utilisateurs ()
    {
        return $this->belongsToMany(Utilisateur::class, 'utilisateur_roles');
    }

    public function droits ()
    {
        return $this->belongsToMany(Droit::class, 'droit_roles');
    }
}
