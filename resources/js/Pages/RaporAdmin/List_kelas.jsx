import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const List_kelas = ({ auth, datas, tahun_ajaran }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Rapor murid" breadcrumbs={["Rapor murid"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">List kelas</span>
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
                                        <th>Kelas</th>
                                        <th>Tahun Ajaran</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                {
                                                    d?.mengikuti_kelas?.kelas
                                                        ?.nama
                                                }
                                            </td>
                                            <td>
                                                {
                                                    d?.mengikuti_kelas
                                                        ?.tahun_ajaran
                                                        ?.tahun_ajaran
                                                }
                                            </td>
                                            <td>
                                                <Link
                                                    href={`/admin/rapor-murid/${d?.mengikuti_kelas_id}/${d?.murid_id}/1/detail_rapor`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    semester 1
                                                </Link>
                                                <Link
                                                    href={`/admin/rapor-murid/${d?.mengikuti_kelas_id}/${d?.murid_id}/2/detail_rapor`}
                                                    className="btn btn-info"
                                                >
                                                    semester 2
                                                </Link>
                                                {/* <Link
                                                    href={`/admin/rapor-murid/${d?.mengikuti_kelas_id}/${d?.murid_id}/detail_rapor`}
                                                    className="btn btn-info"
                                                >
                                                    Detail Rapor
                                                </Link> */}
                                            </td>
                                        </tr>
                                    ))}
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

export default List_kelas;
