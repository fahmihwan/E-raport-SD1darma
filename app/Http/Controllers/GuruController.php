<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('Guru/Index', [
            'datas' => Guru::with('kelas')->latest()->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kelas = Kelas::latest()->orderBy('nama', 'desc')->get();

        return Inertia::render('Guru/Create', [
            'kelass' => $kelas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'nip' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'username' => 'required',
            'password' => 'required',
            'alamat' => 'required',
            'telp' => 'required',
        ]);

        $validated['password'] = Hash::make($request->password);
        // return $validated;
        Guru::create($validated);
        return redirect('/admin/guru');
    }

    /**
     * Display the specified resource.
     */
    public function show(Guru $guru)
    {

        return Inertia::render('Guru/Mengajar');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guru $guru)
    {
        return Inertia::render('Guru/Edit', [
            'guru' => $guru
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Guru $guru)
    {
        $validated = $request->validate([
            'nip' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'alamat' => 'required',
            'telp' => 'required',
        ]);

        Guru::where('id', $guru->id)->update($validated);
        return redirect('/admin/guru');
    }

    public function edit_password(Request $request)
    {
        // return $request;
        return Inertia::render('Guru/Edit_password');
    }
    public function update_password(Request $request)
    {
        $validated = $request->validate([
            "password_lama" => 'required',
            "password_baru" => 'required',
            "confirm_password" => "required",
        ]);

        if (!Hash::check($validated['password_lama'], auth()->guard('webguru')->user()->password)) {
            return redirect()->back()->with('error_message', 'password anda salah');
        }
        if ($validated['password_baru'] != $validated['confirm_password']) {
            return redirect()->back()->with('error_message', 'password tidak cocok');
        }
        Guru::where('id', auth()->guard('webguru')->user()->id)->update([
            'password' => Hash::make($validated['password_baru'])
        ]);

        return redirect('/guru/penilaian');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Guru $guru)
    {
        Guru::destroy($guru->id);
        return redirect()->back();
    }
}
