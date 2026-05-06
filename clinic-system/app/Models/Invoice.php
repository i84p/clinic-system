<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'patient_id',
        'visit_id',
        'created_by_secretary_id',
        'invoice_date',
        'total_amount',
        'status'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function visit()
    {
        return $this->belongsTo(Visit::class);
    }

    public function secretary()
    {
        return $this->belongsTo(Secretary::class, 'created_by_secretary_id');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
