import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ datas }) => {
    const handleDelete = (id) => {
        Inertia.delete(`/admin/murid/${id}`);
    };

    return (
        <AuthenticatedLayout>
            <HeaderLayout title="Murid" breadcrumbs={["List Murid"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="mb-2"></div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List</h3>
                                <div className="d-flex align-items-center">
                                    <Link
                                        href="/admin/murid/create"
                                        className="btn btn-primary"
                                    >
                                        Tambah Murid
                                    </Link>
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
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.data?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas.from}</td>
                                            <td>{d.nama}</td>
                                            <td>{d.no_induk}</td>
                                            <td>{d.jenis_kelamin}</td>
                                            <td>{d.tempat_lahir}</td>
                                            <td>{d.tanggal_lahir}</td>
                                            <td>{d.agama}</td>
                                            <td>{d.alamat}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(d.id)
                                                    }
                                                    className="btn btn-danger"
                                                >
                                                    <i className="fas fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix">
                            <Pagination
                                links={datas.links}
                                totals={datas.total}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
