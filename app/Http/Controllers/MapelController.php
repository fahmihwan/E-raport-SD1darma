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
            'nama' => 'required',
            'kkm' => 'required',
        ]);
        if (Mapel::latest()->exists()) { //jika tabel mapel ada data
            $kode_mapel = Mapel::withTrashed()->orderBy('kode_mapel', 'DESC')->first()->kode_mapel;

            $cut = (int)substr($kode_mapel, 2, 3);
            $number = str_pad($cut + 1, 3, "0", STR_PAD_LEFT);
            $validated['kode_mapel'] = 'MP' . $number;
        }
        if (!Mapel::latest()->exists()) { //jika tabel mapel kosong
            $kode_mapel = 'MP001';
            $validated['kode_mapel'] = $kode_mapel;
        }




        Mapel::create($validated);
        return redirect()->back();
    }

    public function destroy($id)
    {
        Mapel::destroy($id);
        return redirect()->back();
    }
}
