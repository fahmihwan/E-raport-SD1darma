<?php

namespace App\Http\Controllers;

use App\Models\Ekstrakurikuler;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EkstrakurikulerController extends Controller
{
    public function index()
    {

        $datas =  Ekstrakurikuler::latest()->paginate(10);
        return Inertia::render('Master/Ekstrakulikuler/Index', [
            'datas' => $datas
        ]);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'nama' => 'required',
        ]);

        Ekstrakurikuler::create($validated);
        return redirect()->back();
    }

    public function destroy($id)
    {
        Ekstrakurikuler::destroy($id);
        return redirect()->back();
    }
}
