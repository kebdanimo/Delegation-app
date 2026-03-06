<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Conge;
use App\Models\Utilisateur;
use App\Models\Detail_conge;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreCongeRequest;
use App\Http\Requests\getUserInfoRequest;
use App\Http\Requests\One_conge_request;
use App\Http\Requests\Refuse_conge_request;
use App\Http\Requests\Validate_conge_request;
use App\Http\Requests\Store_detail_conge_request;

class CongeController extends Controller
{

    use HttpResponses;

    // demand annulation conge -------------------------??

    public function getAllCongeAllUsers()
    {

        $conges = DB::table('conges')
            ->join('utilisateurs', 'conges.matricule', '=', 'utilisateurs.matricule')
            ->join('type_conges', 'conges.type_conge_id', '=', 'type_conges.type_conge_id')
            ->select('conges.*', 'type_conges.type', 'utilisateurs.nom', 'utilisateurs.prenom')
            ->get();

        return $this->success([
            'conges' => $conges,
        ]);
    }
    public function getOneConge(One_conge_request $request)
    {

        $request->validated();

        $conge = DB::table('conges')
            ->join('utilisateurs', 'conges.matricule', '=', 'utilisateurs.matricule')
            ->join('type_conges', 'conges.type_conge_id', '=', 'type_conges.type_conge_id')
            ->where('conges.conge_id', '=', $request->conge_id)
            ->select('conges.*', 'type_conges.type', 'utilisateurs.nom', 'utilisateurs.prenom')
            ->get();

        return $this->success([
            'conge' => $conge,
        ]);
    }

    // **********************************

    public function getAllCongeOneUser(getUserInfoRequest $request)
    {

        $request->validated();

        $target = Utilisateur::find($request->target_matricule);

        if ($target) {

            $conges = DB::table('conges')
                ->join('utilisateurs', 'conges.matricule', '=', 'utilisateurs.matricule')
                ->join('type_conges', 'conges.type_conge_id', '=', 'type_conges.type_conge_id')
                ->where('utilisateurs.matricule', '=', $target->matricule)
                ->where('conges.type_conge_id', '=', $request->type)
                ->where('conges.status', '=', 1)
                ->select('conges.date_debut', 'conges.duree_global')
                ->get();

            return $this->success([
                'conges' => $conges,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }
    // **********************************

    public function getAllCongeOneUserDetail(getUserInfoRequest $request)
    {

        $request->validated();

        $target = Utilisateur::find($request->target_matricule);

        if ($target) {

            $conges = DB::table('conges')
                ->join('utilisateurs', 'conges.matricule', '=', 'utilisateurs.matricule')
                ->join('type_conges', 'conges.type_conge_id', '=', 'type_conges.type_conge_id')
                ->where('utilisateurs.matricule', '=', $target->matricule)
                ->where('conges.type_conge_id', '=', $request->type)
                ->select('conges.*', 'type_conges.type')
                ->get();

            return $this->success([
                'conges' => $conges,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }

    // *************************************

    public function getdetailconge(getUserInfoRequest $request)
    {

        $target = Utilisateur::find($request->target_matricule);

        if ($target) {

            $congesdetail = DB::table('conges')
                ->join('utilisateurs', 'conges.matricule', '=', 'utilisateurs.matricule')
                ->join('detail_conges', 'conges.conge_id', '=', 'detail_conges.conge_id')
                ->join('type_conges', 'conges.type_conge_id', '=', 'type_conges.type_conge_id')
                ->where('utilisateurs.matricule', '=', $target->matricule)
                ->where('conges.type_conge_id', '=', 1)
                ->where('conges.status', '=', 1)
                ->select('detail_conges.titre', 'detail_conges.duree')
                ->get();

            return $this->success([
                'conges' => $congesdetail,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }

    public function getdetailOneconge(One_conge_request $request)
    {

        $request->validated();

        $congedetail = DB::table('conges')
            ->join('detail_conges', 'conges.conge_id', '=', 'detail_conges.conge_id')
            ->where('conges.conge_id', '=', $request->conge_id)
            ->select('conges.conge_id', 'detail_conges.titre', 'detail_conges.duree')
            ->get();

        return $this->success([
            'conge' => $congedetail,
        ]);
    }



    public function storeConge(StoreCongeRequest $request)
    {

        $request->validated();
        $conge = Conge::create([

            'Matricule' => $request->Matricule,
            'date_debut' => $request->date_debut,
            'date_fin' => $request->date_fin,
            'duree_global' => $request->duree_global,
            'type_conge_id' => $request->type_conge_id

        ]);

        return $this->success([
            'conge' => $conge,
        ]);
    }

    public function storeDetailConge(Store_detail_conge_request $request)
    {

        $request->validated();

        $detail_conge = Detail_conge::create([

            'titre' => $request->titre,
            'duree' =>  $request->duree,
            'conge_id' =>  $request->conge_id

        ]);

        return $this->success([
            'conge' => $detail_conge,
        ]);
    }

    public function validateConge(Validate_conge_request $request)
    {
        $request->validated();

        $target_conge = DB::table('conges')
            ->where('conges.conge_id', '=', $request->conge_id)
            ->first();

        $file = $request->file('link');
        $filenamet = Carbon::now()->format('d-m-Y-H-is') . "_" . $file->getClientOriginalName();
        $file->move('conges_uploads/', $filenamet);
        $filepath = asset("conges_uploads/" . $filenamet);

        if ($target_conge) {

            DB::table('conges')
                ->where('conges.conge_id', '=', $request->conge_id)
                ->update([
                    'link' => $filepath,
                    'status' => 1
                ]);

            $validated_conge = DB::table('conges')
                ->where('conges.conge_id', '=', $request->conge_id)
                ->first();

            return $this->success([
                'conge' => $validated_conge,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }
    public function refuseConge(Refuse_conge_request $request)
    {
        $request->validated();

        $target_conge = DB::table('conges')
            ->where('conges.conge_id', '=', $request->conge_id)
            ->first();

        if ($target_conge) {

            DB::table('conges')
                ->where('conges.conge_id', '=', $request->conge_id)
                ->update([
                    'cs_refus' => $request->cs_refus,
                    'status' => -1
                ]);

            $refused_conge = DB::table('conges')
                ->where('conges.conge_id', '=', $request->conge_id)
                ->first();

            return $this->success([
                'conge' => $refused_conge,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }
}
