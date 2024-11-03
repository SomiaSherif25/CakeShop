<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductsModel extends Model
{
    public $table = 'products';
    use HasFactory;
    protected $fillable = [
        'name',
        'price',
        'category',
        'image',
    ];
}
