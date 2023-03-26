<?php

namespace App\Http\Controllers;

use App\Models\Murid;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MuridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $murid = Murid::latest()->paginate(5);
        return Inertia::render('Murid/Index', [
            'datas' => $murid
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Murid/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated =   $request->validate([
            'nama' => 'required',
            'no_induk' => 'required',
            'jenis_kelamin' => 'required',
            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required',
            'agama' => 'required',
            'alamat' => 'required',
        ]);

        Murid::create($validated);
        return redirect('/admin/murid');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Murid::destroy($id);
        return redirect()->back();
    }
}
