<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Secretary extends Model
{
    protected $fillable = [
        'name', 'email', 'password', 'phone',
        'status', 'created_by_admin_id'
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'created_by_admin_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'created_by_secretary_id');
    }

    public function waitingRooms()
    {
        return $this->hasMany(WaitingRoom::class, 'handled_by_secretary_id');
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class, 'created_by_secretary_id');
    }
}
