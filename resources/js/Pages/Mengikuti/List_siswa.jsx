import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef, useState, useEffect } from "react";
import {
    AlertDanger,
    ButtonModalComponent,
    HeaderLayout,
    ModalLayout,
} from "../../Components/ComponentLayout";
import { InputText, SelectSearch } from "../../Components/InputEL";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const List_siswa = () => {
    const { datas, errors } = usePage().props;

    return (
        <AuthenticatedLayout>
            <HeaderLayout title="List Kelas 1" breadcrumbs={["Kelola"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="mb-2">
                        <Link
                            href="/admin/mengikuti/1/create_siswa_baru"
                            className="btn btn-info mr-2"
                        >
                            Tambah Siswa Baru
                        </Link>
                        <button className="btn btn-info">
                            Kelola Kelulusan
                        </button>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List</h3>
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">tahun ajaran :</span>
                                    <div className="mr-2"></div>
                                    <button className="btn btn-info">
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>Nama</th>
                                        <th>No Induk</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Tempat Lahir</th>
                                        <th>Tgl Lahir</th>
                                        <th>Agama</th>
                                        <th>Alamat</th>
                                        <th>Wali Murid</th>
                                        <th></th>
                                        <th>Created at</th>
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kelas_5</td>
                                        <td>12-02-2023</td>
                                        <td>
                                            <Link
                                                href={`/admin/mengikuti/1`}
                                                className="btn btn-info"
                                            >
                                                kelola
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* {datas.data?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas.from}</td>
                                            <td>{d.tahun_ajaran}</td>
                                            <td>{d.created_at}</td>
                                            <td>
                                                <Link
                                                    href={`/admin/mengajar/${d.id}`}
                                                    className="btn btn-info"
                                                >
                                                    kelola
                                                </Link>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix">
                            {/* <Pagination
                                links={datas.links}
                                totals={datas.total}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default List_siswa;
