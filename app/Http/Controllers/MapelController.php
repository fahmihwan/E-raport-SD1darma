<?php

namespace App\Http\Controllers;

use App\Models\Mapel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MapelController extends Controller
{
    public function index()
    {
        $datas =  Mapel::latest()->paginate(10);
        return Inertia::render('Master/Mapel/Index', [
            'datas' => $datas
        ]);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'nama' => 'required|unique:mapels',
        ]);

        Mapel::create($validated);
        return redirect()->back();
    }

    public function destroy($id)
    {
        Mapel::destroy($id);
        return redirect()->back();
    }
}
