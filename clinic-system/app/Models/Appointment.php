<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'patient_id',
        'doctor_id',
        'created_by_secretary_id',
        'appointment_date',
        'start_time',
        'status',
        'notes'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function secretary()
    {
        return $this->belongsTo(Secretary::class, 'created_by_secretary_id');
    }

    public function visit()
    {
        return $this->hasOne(Visit::class);
    }

    public function waitingRoom()
    {
        return $this->hasOne(WaitingRoom::class);
    }
}
