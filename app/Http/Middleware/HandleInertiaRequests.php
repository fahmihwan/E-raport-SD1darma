<?php

namespace App\Http\Middleware;

use App\Models\Guru;
use App\Models\Tahun_ajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use PhpParser\Node\Expr\AssignOp\ShiftLeft;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**x
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {


        $auth_guru = [];
        $guru = Auth::guard('webguru')->user();

        if ($guru) {
            $tahun_ajaran = Tahun_ajaran::orderBy('tahun_ajaran', 'desc')->first()->id;
            $auth_guru = Guru::select([
                'gurus.id as id',
                'nip',
                'gurus.nama as nama',
                'username',
                'alamat',
                'mengikuti_kelas.id as is_wali_kelas',
                'telp',
                'kelas_id',
                'tahun_ajaran_id',
                'guru_id',
            ])->leftJoin('mengikuti_kelas', 'gurus.id', '=', 'mengikuti_kelas.guru_id')
                ->where([
                    ['gurus.id', '=', $guru->id],
                    ['tahun_ajaran_id', '=', $tahun_ajaran],
                    ['mengikuti_kelas.deleted_at', '=', null]
                ])
                ->first();
        }

        return array_merge(parent::share($request), [
            'auth' => [
                'admin' => $request->user(),
                'guru' => $auth_guru ? $auth_guru : $guru
            ],
            'flash' => [
                'error_message' => fn () => $request->session()->get('error_message')
            ],
        ]);
    }
}
