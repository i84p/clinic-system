<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WaitingRoom extends Model
{
    protected $table = 'waiting_room';

    protected $fillable = [
        'patient_id',
        'appointment_id',
        'handled_by_secretary_id',
        'status',
        'check_in_time'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function secretary()
    {
        return $this->belongsTo(Secretary::class, 'handled_by_secretary_id');
    }
}
