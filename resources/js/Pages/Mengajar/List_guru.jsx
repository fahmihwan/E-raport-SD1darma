import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const List_guru = ({ datas, tahun_id }) => {
    return (
        <AuthenticatedLayout>
            <HeaderLayout
                title="List Guru Pengjar"
                breadcrumbs={["Kelola Pengampu", "List Guru Pengajar"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">
                                    List data tahun ajaran pengampu
                                </h3>
                                <Link href="/admin/mengajar">Kembali</Link>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            {/* <Link
                                href="/admin/mengajar/create"
                                className="btn btn-primary"
                            >
                                tambah data
                            </Link> */}
                            <div className="row row-cols-1 row-sm-cols-2 row-md-cols-3">
                                {datas?.map((d, i) => (
                                    <CardGuru
                                        id={d.id}
                                        tahun_id={tahun_id}
                                        key={i}
                                        nip={d?.nip}
                                        nama={d?.nama}
                                        wali_kelas={d.kelas?.nama}
                                    />
                                ))}
                                {/* <CardGuru />
                                <CardGuru />
                                <CardGuru />
                                <CardGuru />
                                <CardGuru /> */}
                            </div>
                        </div>
                        {/* /.card-body */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default List_guru;

const CardGuru = ({ id, tahun_id, nip, nama, wali_kelas }) => {
    return (
        <div
            className="card bg-light d-flex flex-fill m-2 col"
            style={{ width: "300px" }}
        >
            <div className="card-header text-muted border-bottom-0">
                WALI KELAS : {wali_kelas}
            </div>
            <div className="card-body pt-0">
                <div className="row">
                    <div className="col-12">
                        <h2 className="lead">
                            <b>{nama}</b>
                            <p>Nip. {nip}</p>
                        </h2>
                        <hr />
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                            {/* <li className="small mb-2">
                                KELAS 5
                                <ul>
                                    <li>Bahasa Inggris</li>
                                    <li>Bahasa Jawa</li>
                                </ul>
                            </li>
                            <li className="small mb-2">
                                KELAS 5
                                <ul>
                                    <li>Bahasa Inggris</li>
                                    <li>Bahasa Jawa</li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="text-right">
                    <Link
                        href={`/admin/mengajar/${id}/create_guru_mengajar/${tahun_id}`}
                        className="btn btn-sm btn-primary"
                    >
                        Kelola Mapel
                    </Link>
                </div>
            </div>
        </div>
    );
};
