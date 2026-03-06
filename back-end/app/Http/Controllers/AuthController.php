<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Models\TestUser;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\StoreUtilisateurRequest;
use App\Models\Utilisateur;
use App\Notifications\test_notification;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    use HttpResponses;

    public function login(LoginUserRequest $request)
    {

        $request->validated($request->all());

        // $target = Utilisateur::find($request->matricule);

        $target = Utilisateur::where('matricule', $request->matricule)
            ->where('password', $request->pass)
            ->first();

        if ($target) {
            if ($target->status === 0 || $target->password == 0) {
                return $this->error('', 'ur not aproved yet', 401);
            }

            $pass = 'admin';
            $target["pass"] = $pass;

            // $target->notify(new test_notification());

            return $this->success([
                'user' => $target,
                'token' => $target->createToken('API Token of' . $target->nom)->plainTextToken
            ]);
        } else {
            return $this->error('', 'Mot de pass incorrect', 401);
        }
    }


    public function register(StoreUtilisateurRequest $request)
    {

        $request->validated($request->all());

        $user = Utilisateur::create([
            'matricule' => $request->matricule,
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'cin' => $request->cin,
            'email' => $request->email,
            'tele' => $request->tele,
        ]);

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of' . $user->nom)->plainTextToken
        ]);
    }


    public function logout()
    {
        return response()->json('this is the logout method!');
    }
}
