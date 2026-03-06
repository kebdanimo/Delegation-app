<?php

namespace App\Http\Controllers;

use App\Models\Atestation;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\AjouterAtestRequest;
use App\Http\Requests\AtestReponceRequest;
use App\Http\Requests\get_one_attest_request;
use App\Http\Requests\GetSpecAtestRequest;
use Carbon\Carbon;

class AtestController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $atestations = DB::table('atestations')
            ->join('type_atestations', 'atestations.type_atest_id', '=', 'type_atestations.type_atest_id')
            ->join('utilisateurs', 'atestations.matricule', '=', 'utilisateurs.matricule')
            ->join('affectations', 'utilisateurs.affect_id', '=', 'affectations.affect_id')
            ->join('statuses', 'utilisateurs.statu_id', '=', 'statuses.statu_id')
            ->join('fonctions', 'utilisateurs.fonction_id', '=', 'fonctions.fonction_id')
            ->join('grades', 'utilisateurs.grade_id', '=', 'grades.grade_id')
            ->select('atestations.*', 'type_atestations.type', 'utilisateurs.nom', 'utilisateurs.prenom', 'affectations.libelle as affectation_libelle', 'statuses.libelle as status_libelle', 'fonctions.libelle as fonction_libelle', 'grades.libelle as grade_libelle')
            // ->select('atestations.*', 'type_atestations.type', 'utilisateurs.*', 'affectations.libelle as affectation_libelle', 'statuses.libelle as status_libelle', 'fonctions.libelle as fonction_libelle', 'grades.libelle as grade_libelle')
            ->get();

        return $this->success([
            'atestation' => $atestations,
        ]);
    }

    public function get_one_attest(get_one_attest_request $request)
    {
        $request->validated();
        $attestation = DB::table('atestations')
            ->join('type_atestations', 'atestations.type_atest_id', '=', 'type_atestations.type_atest_id')
            ->join('utilisateurs', 'atestations.matricule', '=', 'utilisateurs.matricule')
            ->where('atestations.atest_id', '=', $request->id)
            ->select('atestations.*', 'type_atestations.type', 'utilisateurs.nom', 'utilisateurs.prenom')
            ->get();

        if ($attestation) {
            return $this->success([
                'attestation' => $attestation,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }

    public function getSpecificAtest(GetSpecAtestRequest $request)
    {
        $request->validated();
        $target = $request->matricule;

        $atests = DB::table('atestations')
            ->join('type_atestations', 'atestations.type_atest_id', '=', 'type_atestations.type_atest_id')
            ->where('atestations.matricule', '=', $target)
            ->select('atestations.*', 'type_atestations.type')
            ->get();

        return $this->success([
            'spec_Atest' => $atests,
        ]);
    }

    public function store(AjouterAtestRequest $request)
    {
        $request->validated();

        $ajouterAtest = Atestation::create([
            'type_atest_id' => $request->type_atest,
            'matricule' => $request->matricule
        ]);
        return $this->success([
            'atest' => $ajouterAtest,
        ]);
    }

    public function atestReponce(AtestReponceRequest $request)
    {
        $request->validated();

        $target = $request->atest_id;

        $targetAtest = DB::table('atestations')
            ->where('atestations.atest_id', '=', $target)
            ->first();

        $file = $request->file('lien');
        $filenamet = Carbon::now()->format('d-m-Y-H-is') . "_" . $file->getClientOriginalName();
        $file->move('Atestations_uploads/', $filenamet);
        $filepath = asset("Atestations_uploads/" . $filenamet);


        if ($targetAtest) {

            DB::table('atestations')
                ->where('atestations.atest_id', '=', $target)
                ->update([
                    'date' => $request->date,
                    'lien' => $filepath,
                    'status' => 1
                ]);

            $updatedAtest = DB::table('atestations')
                ->where('atestations.atest_id', '=', $target)
                ->first();

            return $this->success([
                'atest' => $updatedAtest,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
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

// const newList = spec_Atest.map((item, index) => ({
//   id: index + 1,
//   atestId: item.atest_id,
//   date: item.date,
//   status: item.status,
//   link: item.lien,
//   requestDate: item.date_demande,
//   matricule: item.matricule,
//   typeAtestId: item.type_atest_id,
//   createdAt: item.created_at,
//   updatedAt: item.updated_at
// }));