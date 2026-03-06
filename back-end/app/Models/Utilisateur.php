<?php

namespace App\Models;

use App\Models\Role;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use NunoMaduro\Collision\Adapters\Phpunit\State;

class Utilisateur extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey = 'matricule';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'matricule',
        'nom',
        'prenom',
        'cin',
        'email',
        'password',
        'tele',
        'status',
        'date_prise_dervice',
        'date_recrutement',
        'date_depart',
        'motif_depart',
        'observation',
        'affect_id',
        'statu_id',
        'fonction_id',
        'grade_id'
    ];


    public function roles ()
    {
        return $this->belongsToMany(Role::class, 'utilisateur_roles');
    }

    public function affectation()
    {
        return $this->belongsTo(Affectation::class);
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }
    public function fonction()
    {
        return $this->belongsTo(Fonction::class);
    }
    public function grade()
    {
        return $this->belongsTo(Grade::class);
    }

    public function atestation()
    {
        return $this->hasMany(Atestation::class);
    }
    

}



