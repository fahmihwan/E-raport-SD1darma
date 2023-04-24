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
                $request->session()->regenerate();
                return redirect()->intended('/admin/dashboard');
            }
        }
        if ($request->akses == 'admin') {
            if (Auth::guard('webadmin')->attempt($validated)) {
                $request->session()->regenerate();
                return redirect()->intended('/admin/dashboard');
            }
        }

        return redirect()->back()->with('error_message', 'username atau password salah');
        // return redirect()->back()->withErrors('Login Error!!.');
    }

    public function logout(Request $request)
    {
        // dd(Auth::guard('webadmin')->user() !== null);
        if (Auth::guard('webadmin')->user() !== null) {
            Auth::guard('webadmin')->logout();
        };
        if (Auth::guard('webguru')->user() !== null) {
            Auth::guard('webguru')->logout();
        }
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
