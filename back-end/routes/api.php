<?php

use App\Http\Controllers\ActualiteController;
use App\Http\Controllers\AtestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CongeController;
use App\Http\Controllers\DetailCongeController;
use App\Http\Controllers\FonctionController;
use App\Http\Controllers\TypeAtestController;
use App\Http\Controllers\TypeCongeController;
use App\Http\Controllers\UtilisateurController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);


// USERS ROUTES

Route::post('/utilisateur/validate', [UtilisateurController::class, 'validateUtilisateur']);
Route::post('/utilisateur/getDroits', [UtilisateurController::class, 'getUtilisateurDroits']);
Route::post('/utilisateur/getInfo', [UtilisateurController::class, 'getUtilisateurInfo']);
Route::get('/utilisateur/getallUtilisateur', [UtilisateurController::class, 'getAllUtilisateur']);
Route::get('/utilisateur/getallUnregistredUtilisateur', [UtilisateurController::class, 'getAllUnregisteredUtilisateurs']);
Route::post('/utilisateur/getUnregistredUtilisateurInfo', [UtilisateurController::class, 'getUnregistredUtilisateurInfo']);
Route::post('/utilisateur/delete', [UtilisateurController::class, 'deleteUtlisateur']);
Route::post('/utilisateur/genererMdp', [UtilisateurController::class, 'genererMdp']);
Route::get('/utilisateur/getValidationInfo', [UtilisateurController::class, 'getValidationInfo']);
Route::post('/utilisateur/resetPass', [UtilisateurController::class, 'resetPass']);
Route::post('/utilisateur/forgotPass', [UtilisateurController::class, 'forgotPass']);


//  CONGE ROUTES

Route::get('/all_conge_all_users', [CongeController::class, 'getAllCongeAllUsers']);
Route::post('/all_conge_one_user', [CongeController::class, 'getAllCongeOneUser']);
Route::post('/all_conge_one_user_detail', [CongeController::class, 'getAllCongeOneUserDetail']);
Route::post('/get_One_Conge', [CongeController::class, 'getOneConge']);

Route::post('/detail_conge', [CongeController::class, 'getdetailconge']);
Route::post('/detail_one_conge', [CongeController::class, 'getdetailOneconge']);

Route::post('/store_conge', [CongeController::class, 'storeConge']);
Route::post('/store_detail_conge', [CongeController::class, 'storeDetailConge']);

Route::post('/validate_conge', [CongeController::class, 'validateConge']);
Route::post('/refuse_conge', [CongeController::class, 'refuseConge']);



Route::resource('/typeConge', TypeCongeController::class);
Route::resource('/detailConge', DetailCongeController::class);


// ATTETSATION ROUTES

Route::post('/atestation/get_one_attest', [AtestController::class, 'get_one_attest']);
Route::post('/atestation/answer', [AtestController::class, 'atestReponce']);
Route::post('/atestation/getAtest', [AtestController::class, 'getSpecificAtest']);
Route::resource('/atestation', AtestController::class);

Route::get('/typeatest', [TypeAtestController::class, 'index']);


// aCTUALITE ROUTES

Route::resource('/actulite', ActualiteController::class);
