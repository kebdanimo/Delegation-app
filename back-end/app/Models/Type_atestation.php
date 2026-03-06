<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_atestation extends Model
{
    use HasFactory;

    public function atestation()
    {
        return $this->hasMany(Atestation::class);
    }
}
