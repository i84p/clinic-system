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
        Schema::create('invoices', function (Blueprint $table) {
        $table->id();

        $table->foreignId('patient_id')
              ->constrained()
              ->cascadeOnDelete();

        $table->foreignId('visit_id')
              ->constrained()
              ->cascadeOnDelete();

        $table->foreignId('created_by_secretary_id')
              ->constrained('secretaries')
              ->cascadeOnDelete();

        $table->date('invoice_date');
        $table->float('total_amount');
        $table->string('status')->default('pending');

        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
