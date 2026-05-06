<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = [
        'name', 'email', 'password', 'phone',
        'specialization', 'status', 'created_by_admin_id'
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'created_by_admin_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function visits()
    {
        return $this->hasMany(Visit::class);
    }
}
