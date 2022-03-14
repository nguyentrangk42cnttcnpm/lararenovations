<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'noidung', 'image', 'service_id'];

    public function services(){
        return $this->belongsTo(\App\Models\Service::class, 'service_id');
    }
}
