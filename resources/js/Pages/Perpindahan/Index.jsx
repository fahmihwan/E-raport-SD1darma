import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ datas, auth }) => {
    const handleDelete = (id) => {
        Inertia.delete(`/admin/perpindahan/${id}`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Perpindahan" breadcrumbs={["perpindahan"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="mb-2"></div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List perpindahan</h3>
                                <div className="d-flex align-items-center">
                                    <Link
                                        href="/admin/perpindahan/create"
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
                                        <th>Keterangan</th>
                                        <th>Tahun</th>

                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.data?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas.from}</td>
                                            <td>{d?.murid?.nama}</td>
                                            <td>{d?.murid?.no_induk}</td>
                                            <td>{d?.murid?.jenis_kelamin}</td>
                                            <td>{d?.keterangan}</td>
                                            <td>{d?.tahun}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link
                                                        href={`/admin/perpindahan/${d?.murid_id}/detail`}
                                                        className="btn btn-info mr-2"
                                                    >
                                                        detail
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            confirm(
                                                                "apakah anda yakin ingin menghapus?"
                                                            ) &&
                                                                handleDelete(
                                                                    d.id
                                                                );
                                                        }}
                                                        className="btn btn-danger"
                                                    >
                                                        <i className="fas fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
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
