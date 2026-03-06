<?php

namespace App\Http\Controllers;

use App\Models\Type_atestation;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;

class TypeAtestController extends Controller
{
    //
    use HttpResponses;

    public function index()
    {
        $types = Type_atestation::all();

        return $this->success([
            'type_Atest' => $types,
        ]);
    }
}
