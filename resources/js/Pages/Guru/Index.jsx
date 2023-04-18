import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import {
    AlertDanger,
    ButtonModalComponent,
    HeaderLayout,
} from "../../Components/ComponentLayout";
import { InputText } from "../../Components/InputEL";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ auth }) => {
    const { datas, errors } = usePage().props;
    const { data, setData, post, processing, reset } = useForm({
        nama: "",
    });

    const closeModalRef = useRef(null);

    const handleDelete = (e, id) => {
        e.preventDefault();
        confirm("apakah anda yakin ingin menghapus?") &&
            Inertia.delete("/admin/guru/" + id);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Guru" breadcrumbs={["List Guru"]} />
            <div className="content">
                <div className="container-fluid">
                    {errors?.nama && <AlertDanger title={errors?.nama} />}
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List Guru</h3>
                                <Link
                                    href="/admin/guru/create"
                                    className="btn btn-primary"
                                    as="button"
                                >
                                    Tambah Data
                                </Link>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>NIP</th>
                                        <th>Nama</th>
                                        <th>gender </th>
                                        <th>Username</th>
                                        <th>Alamat</th>
                                        <th>Telp</th>
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas?.data?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas?.from}</td>
                                            <td>{d.nip}</td>
                                            <td>{d.nama}</td>
                                            <td>{d.jenis_kelamin}</td>
                                            <td>{d.username}</td>
                                            <td>{d.alamat}</td>
                                            <td>{d.telp}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link
                                                        href={`/admin/guru/${d.id}/edit`}
                                                        className="btn btn-warning mr-2"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger mr-2"
                                                        onClick={(e) =>
                                                            handleDelete(
                                                                e,
                                                                d.id
                                                            )
                                                        }
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
