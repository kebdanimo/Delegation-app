<?php

namespace App\Http\Controllers;

use App\Models\Type_conge;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class TypeCongeController extends Controller
{
    use HttpResponses;


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $type = Type_conge::all();

        return $this->success([
            'conge' => $type,
        ]);

    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
