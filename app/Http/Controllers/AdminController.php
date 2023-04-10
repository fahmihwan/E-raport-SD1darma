<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = Admin::latest()->paginate(5);
        return Inertia::render('Admin/Index', [
            'datas' => $datas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required',
            'username' => 'required',
            'password' => 'required',
        ]);
        $validated['password'] = Hash::make($request->password);
        Admin::create($validated);
        return redirect('/admin/akun');
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        return Inertia::render("Admin/Edit", [
            'admin' => Admin::where('id', $id)->first()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'nama' => 'required',
            'username' => 'required'
        ];
        if ($request->changePassword) {
            $rules['password'] = 'required';
        }
        $validated = $request->validate($rules);
        if ($request->changePassword) {
            $validated['password'] = Hash::make($request->password);
        }
        Admin::where('id', $id)->update($validated);
        return redirect('/admin/akun');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Admin::destroy($id);
        return redirect('/admin/akun');
    }
}
