<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DetailCongeRequest;
use App\Models\Detail_conge;
use App\Traits\HttpResponses;

class DetailCongeController extends Controller
{
    use HttpResponses;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(DetailCongeRequest $request)
    {

        $detail_conge = Detail_conge::create([
            // 'detail_conge_id' => $request->detail_conge_id,
            'titre' => $request->titre,
            'duree' => $request->duree,
            'conge_id' => $request->conge_id
        ]);

        if ($detail_conge) {
            return $this->success([
                'detail_conge' => $detail_conge,
            ]);
        }
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
