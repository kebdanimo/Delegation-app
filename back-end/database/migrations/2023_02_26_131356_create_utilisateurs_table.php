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
        Schema::create('utilisateurs', function (Blueprint $table) {

            $table->string('matricule',20);

            $table->primary('matricule');
            $table->string('nom');
            $table->string('prenom');
            $table->string('cin');
            $table->string('email');

            $table->string('password')->default(0);
            $table->integer('tele');

            $table->boolean('status')->default(0);

            $table->date('date_prise_dervice')->nullable()->default(null);
            $table->date('date_recrutement')->nullable()->default(null);
            $table->date('date_depart')->nullable()->default(null);  
            $table->string('motif_depart')->nullable()->default(null);
            $table->string('observation')->nullable()->default(null);

            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();

            $table->bigInteger('affect_id')->unsigned()->nullable()->default(null);
            $table->foreign('affect_id')->references('affect_id')->on('affectations')->onDelete('cascade');

            $table->bigInteger('statu_id')->unsigned()->nullable()->default(null);
            $table->foreign('statu_id')->references('statu_id')->on('statuses')->onDelete('cascade');

            $table->bigInteger('fonction_id')->unsigned()->nullable()->default(null);
            $table->foreign('fonction_id')->references('fonction_id')->on('fonctions')->onDelete('cascade');

            $table->bigInteger('grade_id')->unsigned()->nullable()->default(null);
            $table->foreign('grade_id')->references('grade_id')->on('grades')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};
