<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetDroitsRequest;
use App\Http\Requests\getUserInfo;
use App\Http\Requests\getUserInfoRequest;
use App\Http\Requests\Reset_pass_request;
use App\Models\Utilisateur;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ValidateUtilisateurRequest;
use App\Models\Affectation;
use App\Models\Fonction;
use App\Models\Grade;
use App\Models\Status;
use App\Models\Utilisateur_role;
use App\Notifications\test_notification;
use App\Notifications\forgot_password;

class UtilisateurController extends Controller
{

    use HttpResponses;


    public function validateUtilisateur(ValidateUtilisateurRequest $request)
    {
        $target = Utilisateur::find($request->matricule);

        if ($target) {
            $password = Str::random(6);

            $target->update([
                'affect_id' => $request->affect,
                'statu_id' =>  $request->status,
                'fonction_id' =>  $request->fonction,
                'grade_id' =>  $request->grade,
                'status' =>  1,

                'password' => 'admin'
                // 'password' => Hash::make($password) ;
            ]);

            Utilisateur_role::create([
                'Matricule' => $request->matricule,
                'role_id' => '1'
            ]);

            $pass = 'admin2';

            $target["pass"] = $password;
            $target->notify(new test_notification());

            return $this->success([
                'utilisateur' => $target, 'validated'
            ]);
        }

        return $this->error('', 'target not found', 401);
    }


    public function getUtilisateurDroits(GetDroitsRequest $request)
    {

        $target = Utilisateur::find($request->target_id);
        if ($target) {

            $droits = DB::table('utilisateurs')
                ->join('utilisateur_roles', 'utilisateurs.matricule', '=', 'utilisateur_roles.matricule')
                ->join('roles', 'utilisateur_roles.role_id', '=', 'roles.role_id')
                ->join('droit_roles', 'roles.role_id', '=', 'droit_roles.role_id')
                ->join('droits', 'droit_roles.droit_id', '=', 'droits.droit_id')

                ->where('utilisateurs.matricule', '=', $target->matricule)
                ->select('droits.*')
                ->get();

            return response()->json($droits);
        }

        return $this->error('', 'target not found', 401);
    }

    public function getUtilisateurInfo(getUserInfoRequest $request)
    {
        $target = Utilisateur::find($request->target_matricule);

        if ($target) {

            $info = DB::table('utilisateurs')
                ->join('affectations', 'utilisateurs.affect_id', '=', 'affectations.affect_id')
                ->join('statuses', 'utilisateurs.statu_id', '=', 'statuses.statu_id')
                ->join('fonctions', 'utilisateurs.fonction_id', '=', 'fonctions.fonction_id')
                ->join('grades', 'utilisateurs.grade_id', '=', 'grades.grade_id')
                ->where('utilisateurs.matricule', '=', $target->matricule)
                ->select('utilisateurs.*', 'affectations.libelle as affectation_libelle', 'statuses.libelle as status_libelle', 'fonctions.libelle as fonction_libelle', 'grades.libelle as grade_libelle')
                ->first();



            return $this->success([
                'user' => $info,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }

    public function getAllUtilisateur()
    {
        $utilisateurs = DB::table('utilisateurs')
            ->join('affectations', 'utilisateurs.affect_id', '=', 'affectations.affect_id')
            ->join('statuses', 'utilisateurs.statu_id', '=', 'statuses.statu_id')
            ->join('fonctions', 'utilisateurs.fonction_id', '=', 'fonctions.fonction_id')
            ->join('grades', 'utilisateurs.grade_id', '=', 'grades.grade_id')
            ->select('utilisateurs.*', 'affectations.libelle as affectation_libelle', 'statuses.libelle as status_libelle', 'fonctions.libelle as fonction_libelle', 'grades.libelle as grade_libelle')
            ->get();

        return $this->success([
            'user' => $utilisateurs,
        ]);
    }

    public function getAllUnregisteredUtilisateurs()
    {
        $unregistredUtlisateur = DB::table('utilisateurs')
            ->where('utilisateurs.status', '=', 0)
            ->get();

        return $this->success([
            'unregistredUtlisateur' => $unregistredUtlisateur,
        ]);
    }

    public function deleteUtlisateur(getUserInfoRequest $request)
    {
        $target = Utilisateur::find($request->target_matricule);

        if ($target) {

            $target->delete();
            return $this->success([
                'user got deleted ',
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }


    public function getUnregistredUtilisateurInfo(getUserInfoRequest $request)
    {
        $target = Utilisateur::find($request->target_matricule);

        if ($target) {
            $unregistredUtlisateurinfo = DB::table('utilisateurs')
                ->where('utilisateurs.matricule', '=', $request->target_matricule)
                ->first();

            return $this->success([
                'user' => $unregistredUtlisateurinfo,
            ]);
        } else {
            return $this->error('', 'target not found', 401);
        }
    }

    public function getValidationInfo()
    {

        $fonctions = Fonction::all();
        $affectations = Affectation::all();
        $status = Status::all();
        $grade = Grade::all();

        return response()->json([
            'affectation' => $affectations,
            'fonctions' => $fonctions,
            'status' => $status,
            'grade' => $grade
        ], 200);
    }

    public function genererMdp(getUserInfoRequest $request)
    {
        $target = Utilisateur::find($request->target_matricule);

        if ($target) {
            $password = Str::random(4);
            $target->update([
                'password' => $password
                // 'password' => Hash::make($password) ;
            ]);

            $target["pass"] = $password;
            $target->notify(new forgot_password());

            return $this->success([
                'utilisateur' => $target, 'mdp generated'
            ]);
        }

        return $this->error('', 'target not found', 401);
    }

    public function resetPass(Reset_pass_request $request)
    {
        $request->validated();
        $target = Utilisateur::find($request->matricule);
        if ($target) {
            $target->update([
                'password' => $request->new_pass
                // 'password' => Hash::make($request->new_pass) ;
            ]);

            return $this->success([
                'utilisateur' => $target, 'mdp resetted'
            ]);
        }
    }

    public function forgotPass(GetDroitsRequest $request)
    {
        $request->validated();
        $target = Utilisateur::find($request->target_id);
        if ($target) {

            $target->notify(new forgot_password());

            return $this->success([
                'utilisateur' => $target->password
            ]);
        }
    }
}
