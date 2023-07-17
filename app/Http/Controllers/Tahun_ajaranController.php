<?php

namespace App\Http\Controllers;

use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Tahun_ajaranController extends Controller
{
    public function index()
    {
        $datas =  Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->paginate(10);
        return Inertia::render('Master/Tahun_ajaran/Index', [
            'datas' => $datas
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'tahun_ajaran' => 'required',
        ]);

        Tahun_ajaran::create($validated);
        return redirect()->back();
    }

    public function destroy($id)
    {
        Tahun_ajaran::destroy($id);
        return redirect()->back();
    }
}
