<?php

namespace App\Http\Controllers;

use App\Models\Actualite;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Requests\StoreActualiteRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ActualiteController extends Controller
{

    use HttpResponses;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $actualite = Actualite::all();

        $actualites = DB::table('actualites')
            ->join('utilisateurs', 'actualites.matricule', '=', 'utilisateurs.matricule')
            ->select('actualites.*', 'utilisateurs.nom', 'utilisateurs.prenom')
            ->get();

        return $this->success([
            'actualites' => $actualites
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActualiteRequest $request)
    {

        $request->validated($request->all());

        $file = $request->file('link');
        $filenamet = Carbon::now()->format('d-m-Y-H-is') . "_" . $file->getClientOriginalName();
        $file->move('uploads/', $filenamet);
        $filepath = asset("uploads/" . $filenamet);

        $actualite = Actualite::create([
            'titre' => $request->titre,
            'discription' => $request->discription,
            'article' => $request->article,
            'date' => $request->date,
            'link' => $filepath,
            'matricule' => $request->matricule,
        ]);

        return $this->success([
            'actualiter' => $actualite
        ]);
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
