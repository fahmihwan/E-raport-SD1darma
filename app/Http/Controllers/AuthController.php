<?php

namespace App\Http\Controllers;

use App\Bantuan\TesFileKu;
use App\Helpers\CustomeSeeder;
use App\Models\Guru;
use App\Models\Mengikuti_kelas;

use App\Models\Tahun_ajaran;
use Database\SeederCustome\SeederCustome;
// use App\Utils\MyClass as UtilsMyClass;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


// use SeederCustome;


class AuthController extends Controller
{

    public function index()
    {
        // return count(CustomeSeeder::dataMurid());
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
        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->id;
        if (!Tahun_ajaran::exists()) {
            return "mohon lengkapi data master tahun ajaran...";
        }
        $validated = $this->validate($request, [
            'username'   => 'required',
            'password' => 'required'
        ]);
        $guru = Guru::where(['username' => $validated['username']])->first();
        if (!$guru) {
            return redirect()->back()->with('error_message', 'username atau password salah');
        }
        $isWali = Mengikuti_kelas::where([
            'guru_id' => $guru->id,
            'tahun_ajaran_id' => $tahun_ajaran,
        ])->exists();

        if ($isWali) {
            return redirect()->back()->with('error_message', 'username atau password salah');
        }

        if (Auth::guard('webguru')->attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->intended('/admin/dashboard');
        }
        return redirect()->back()->with('error_message', 'username atau password salah');
    }

    public function authenticated_wali(Request $request)
    {
        if (!Tahun_ajaran::exists()) {
            return "mohon lengkapi data master tahun ajaran...";
        }
        $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->id;
        $validated = $this->validate($request, [
            'username'   => 'required',
            'password' => 'required'
        ]);
        $guru = Guru::where(['username' => $validated['username']])->first();
        if (!$guru) {
            return redirect()->back()->with('error_message', 'username atau password salah');
        }
        $isWali = Mengikuti_kelas::where([
            'guru_id' => $guru->id,
            'tahun_ajaran_id' => $tahun_ajaran,
        ])->exists();

        if (!$isWali) {
            return redirect()->back()->with('error_message', 'username atau password salah');
        }
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
