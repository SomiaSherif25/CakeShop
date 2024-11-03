<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class HomeController extends Controller
{


    // public function __construct(){
    //     $this->middleware('auth');
    // }

    // public function index(){
    //     return view('user');
    // }

    // public function adminHome(){
    //     return view('admin');
    // }

    public function index(){
        if(Auth::id()){
            $type = Auth()->user()->type;
        
        if($type == 'admin'){
            return view('admin');
        } else if ($type == 'user') {
            return view('user');
        }
        else{
            return redirect()->back();
        }
    }
    }
}
