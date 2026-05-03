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
        Schema::create('visits', function (Blueprint $table) {
        $table->id();

        //  Foreign Keys
        $table->foreignId('appointment_id')
              ->constrained()
              ->cascadeOnDelete();

        $table->foreignId('patient_id')
              ->constrained()
              ->cascadeOnDelete();

        $table->foreignId('doctor_id')
              ->constrained()
              ->cascadeOnDelete();

        //  بيانات الزيارة
        $table->date('visit_date');
        $table->string('chief_complaint')->nullable();
        $table->string('diagnosis')->nullable();
        $table->text('notes')->nullable();

        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visits');
    }
};
