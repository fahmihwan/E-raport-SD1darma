<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function authenticated(Request $request)
    {
        $validated = $this->validate($request, [
            'username'   => 'required',
            'password' => 'required'
        ]);

        if ($request->akses == 'guru') {
            if (Auth::guard('webguru')->attempt($validated)) {
                return redirect()->intended('/guru/penilaian');
            }
        } else {
            if (Auth::guard('web')->attempt($validated)) {
                return redirect()->intended('/admin/dashboard');
            }
        }

        return redirect()->back()->withErrors('Login Error!!.');
    }

    public function logout(Request $request)
    {

        Auth::guard('webguru')->logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();
        return redirect('/');
    }
}
