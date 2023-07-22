<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Tahun_ajaran;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function authenticated_admin(Request $request)
    {
        $validated = $this->validate($request, [
            'username'   => 'required',
            'password' => 'required'
        ]);
        if (Auth::guard('webadmin')->attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->intended('/admin/dashboard');
        }
        return redirect()->back()->with('error_message', 'username atau password salah');
    }

    public function authenticated_guru(Request $request)
    {
        if (!Tahun_ajaran::exists()) {
            return "mohon lengkapi data master tahun ajaran...";
        }
        $validated = $this->validate($request, [
            'username'   => 'required',
            'password' => 'required'
        ]);
        if (Auth::guard('webguru')->attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->intended('/admin/dashboard');
        }
        return redirect()->back()->with('error_message', 'username atau password salah');
    }


    public function logout_admin(Request $request)
    {
        Auth::guard('webadmin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
    public function logout_guru(Request $request)
    {
        Auth::guard('webguru')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
