import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ datas, auth }) => {
    const handleDelete = (id) => {
        return Inertia.delete(`/admin/akun/${id}`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Akun" breadcrumbs={["List Akun"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="mb-2"></div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List</h3>
                                <div className="d-flex align-items-center">
                                    <Link
                                        href="/admin/akun/create"
                                        className="btn btn-primary"
                                    >
                                        Tambah Akun
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
                                        <th>Usernmae</th>
                                        <th>Created_at</th>
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas?.data?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas.from}</td>
                                            <td>{d.nama}</td>
                                            <td>{d.username}</td>
                                            <td>{d.created_at}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link
                                                        href={`/admin/akun/${d.id}/edit`}
                                                        className="btn btn-warning mr-2"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(d.id)
                                                        }
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
                                links={datas?.links}
                                totals={datas?.total}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
