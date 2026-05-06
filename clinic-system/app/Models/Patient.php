<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'age',
        'gender'
    ];

  
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    
    public function visits()
    {
        return $this->hasMany(Visit::class);
    }

    public function waitingRooms()
    {
        return $this->hasMany(WaitingRoom::class);
    }


    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
