import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ list_guru_mengajar, auth }) => {
    console.log(list_guru_mengajar);
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="List Guru Pengajar"
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
                                {/* /admin/mengajar/create_guru_mengajar */}
                                {/* <Link
                                    href="/admin/mengajar/create_guru_mengajar"
                                    className="btn btn-primary"
                                >
                                    Tamabh Data
                                </Link> */}
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
                            <div className="row row-cols-2">
                                {list_guru_mengajar?.map((d, i) => (
                                    <CardGuru
                                        key={i}
                                        id={d.id}
                                        nip={d.nip}
                                        nama={d.nama}
                                        wali_kelas={d.kelas?.nama}
                                        list_mengajar={d.mengajar_mapels}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* /.card-body */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;

const CardGuru = ({ id, nip, nama, wali_kelas, list_mengajar }) => {
    return (
        <div className="col">
            <div className="card bg-light d-flex flex-fill  ">
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
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mengampu</th>
                                        <th scope="col">Kelas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list_mengajar?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{d?.mapel.nama}</td>
                                            <td>{d?.kelas.nama}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-right">
                        <Link
                            href={`/admin/mengajar/${id}/create_mengajar_mapel`}
                            className="btn btn-sm btn-primary"
                        >
                            Kelola Mapel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
