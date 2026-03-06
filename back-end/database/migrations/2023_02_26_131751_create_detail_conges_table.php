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
        Schema::create('detail_conges', function (Blueprint $table) {

            $table->id('detail_conge_id');
            $table->integer('titre');
            $table->integer('duree');

            $table->bigInteger('conge_id')->unsigned();
            $table->foreign('conge_id')->references('conge_id')->on('conges')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_conges');
    }
};
