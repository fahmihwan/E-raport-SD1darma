import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef, useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ kelas, auth, flash }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Nilai mengajar"
                breadcrumbs={["Nilai mengajar"]}
            />
            <div className="content">
                <div className="container-fluid">
                    {flash?.error_message && (
                        <div className="alert alert-danger" role="alert">
                            {flash?.error_message}
                        </div>
                    )}
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                {/* <h3 className="card-title">List</h3> */}
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">List mengajar</span>
                                    <div className="mr-2"></div>
                                </div>
                                <div className="d-flex align-items-center"></div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>Kelas</th>
                                        <th>Mapel</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kelas?.map((d, i) => (
                                        <tr key={i}>
                                            <td>1</td>
                                            <td>{d.kelas.nama}</td>
                                            <td>{d.mapel.nama}</td>
                                            <td>
                                                <Link
                                                    href={`/guru/penilaian/${d?.kelas_id}/${d.mapel_id}/1/list_nilai`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    Semester 1
                                                </Link>
                                                <Link
                                                    href={`/guru/penilaian/${d?.kelas_id}/${d.mapel_id}/2/list_nilai`}
                                                    className="btn btn-info"
                                                >
                                                    Semester 2
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
