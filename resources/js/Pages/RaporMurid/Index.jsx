import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ auth, datas, tahun_ajaran }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Rapor murid" breadcrumbs={["Rapor murid"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">tahun ajaran :</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    {/* <Link
                                        href="/admin/mengikuti/create_kelas_tahun_ajaran_baru"
                                        className="btn btn-primary"
                                    >
                                        Tamabh Data
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "20px" }}>#</th>
                                        <th>No Induk</th>
                                        <th>Murid</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{d.murid.no_induk}</td>
                                            <td>{d.murid.nama}</td>
                                            <td>
                                                <Link
                                                    href={`/guru/rapor-murid/${d.id}/1/detail_nilai_murid`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    semester 1
                                                </Link>
                                                <Link
                                                    href={`/guru/rapor-murid/${d.id}/2/detail_nilai_murid`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    semester 2
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}

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

export default Index;
