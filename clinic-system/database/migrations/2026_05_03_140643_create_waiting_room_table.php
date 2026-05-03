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
        Schema::create('waiting_room', function (Blueprint $table) {
        $table->id();

        $table->foreignId('patient_id')
              ->constrained()
              ->cascadeOnDelete();

        $table->foreignId('appointment_id')
              ->constrained()
              ->cascadeOnDelete();

        $table->foreignId('handled_by_secretary_id')
              ->constrained('secretaries')
              ->cascadeOnDelete();

        $table->string('status')->default('waiting');
        $table->dateTime('check_in_time')->nullable();

        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('waiting_room');
    }
};
