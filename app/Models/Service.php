<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'noidung', 'image', 'customer_id'];

    public function customer(){
        return $this->belongsTo(\App\Models\Customer::class, 'review_id');
    }

    public function medias(){
        return $this->hasMany(\App\Models\Media::class, 'media_id');
    }
}
