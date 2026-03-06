<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('conges', function (Blueprint $table) {

            $table->id('conge_id');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->integer('duree_global');
            $table->date('date_demande_annulation')->nullable()->default(null);
            $table->date('date_annulation')->nullable()->default(null);

            $table->string('Matricule');
            $table->foreign('Matricule')->references('Matricule')->on('utilisateurs')->onDelete('cascade');

            $table->bigInteger('type_conge_id')->unsigned();
            $table->foreign('type_conge_id')->references('type_conge_id')->on('type_conges')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conges');
    }
};
