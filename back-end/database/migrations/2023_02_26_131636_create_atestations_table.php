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
        Schema::create('atestations', function (Blueprint $table) {
            
            $table->id('atest_id');
            $table->date('date');
            $table->date('date_demande');

            $table->string('matricule');
            $table->foreign('matricule')->references('matricule')->on('utilisateurs')->onDelete('cascade');

            $table->bigInteger('type_atest_id')->unsigned();
            $table->foreign('type_atest_id')->references('type_atest_id')->on('type_atestations')->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('atestations');
    }
};
