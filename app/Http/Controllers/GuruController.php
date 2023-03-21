<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use Illuminate\Http\Request;
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
        // return $request;
        $validated = $request->validate([
            'nip' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'username' => 'required',
            'password' => 'required',
            'alamat' => 'required',
            'telp' => 'required',
        ]);

        $validated['kelas_id'] = $request->wali_kelas;

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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Guru $guru)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Guru $guru)
    {
        //
    }
}
