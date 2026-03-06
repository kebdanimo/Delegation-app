<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUtilisateurRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [

            'matricule' => ['required','string', 'unique:utilisateurs'],
            'nom' => ['required'],
            'prenom' => ['required'],
            'cin' => ['required', 'unique:utilisateurs'],
            'email' => ['required', 'unique:utilisateurs'],
            'tele' => [],

            // 'password' => [],
            // 'status' => [],
            // 'date_prise_dervice' => [],
            // 'date_recrutement' => [],
            // 'date_depart' => [],
            // 'motif_depart' => [],
            // 'observation' => [],
            // 'affect_id' => [],
            // 'statu_id  ' => [],
            // 'fonction_id' => [],
            // 'grade_id' => []
        ];
    }
}
