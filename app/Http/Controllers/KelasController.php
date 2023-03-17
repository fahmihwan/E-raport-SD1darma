<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelasController extends Controller
{
    public function index()
    {
        $datas =  Kelas::latest()->paginate(10);

        return Inertia::render('Master/Kelas/Index', [
            'datas' => $datas
        ]);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'nama' => 'required|unique:kelas',
        ]);

        Kelas::create($validated);
        return redirect()->back();
    }

    public function destroy($id)
    {
        Kelas::destroy($id);
        return redirect()->back();
    }
}
