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
        Schema::create('droit_roles', function (Blueprint $table) {

            $table->bigInteger('droit_id')->unsigned();
            $table->bigInteger('role_id')->unsigned();

            $table->foreign('droit_id')->references('droit_id')->on('droits')->onDelete('cascade');
            $table->foreign('role_id')->references('role_id')->on('roles')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('droit_roles');
    }
};
