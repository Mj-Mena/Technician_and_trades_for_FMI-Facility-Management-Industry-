<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technician extends Model
{
    /** @use HasFactory<\Database\Factories\TechnicianFactory> */
    use HasFactory;
    protected $primaryKey = 'tech_id'; // tell Eloquent the PK is 'techid'
    public $incrementing = true;      // important if using bigIncrements
    protected $keyType = 'int';
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
    public function trades()
    {
        return $this->belongsToMany(Trades::class);
    }
}
