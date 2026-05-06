<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable = ['name', 'email', 'password'];

    public function doctors()
    {
        return $this->hasMany(Doctor::class, 'created_by_admin_id');
    }

    public function secretaries()
    {
        return $this->hasMany(Secretary::class, 'created_by_admin_id');
    }
}
