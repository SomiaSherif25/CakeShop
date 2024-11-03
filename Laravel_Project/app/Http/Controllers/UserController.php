<?php

namespace App\Http\Controllers;

use Cookie;
use Illuminate\Auth\Access\Response;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;


class UserController extends Controller
{


    public function __construct(){
        $this->middleware('guest')->except('logout');
    }

    public function Register(Request $data){
        $user = new User;
        $user->name = $data->name;
        $user->email = $data->email;
        $user->password = bcrypt($data->password);
        // $user->role = "0";
        $user->save();
        return redirect('/login');

    }
    public function Login(Request $data){ 
        $x = $data->only('email', 'password');
        if(!Auth::attempt($x)){
            throw ValidationException::withMessages([
                'email' => trans('auth.failed')
            ]);
        }
        // $token = $user->createToken('authToken')->plainTextToken;
        // $cookie = Cookie('jwt',$token,60*24);
        // $user = Auth::user();
        $data->session()->regenerate();
        // return redirect('/user');
    }
    public function getAll()
    {
        return DB::table('users')->get();
    }

    public function Logout(Request $data){
        Auth::guard('web')->logout();
        $data->session()->invalidate();
        return redirect('/login');
    }
    
}
