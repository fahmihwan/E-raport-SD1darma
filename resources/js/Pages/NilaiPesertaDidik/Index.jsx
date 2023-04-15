import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef, useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ kelas, auth, flash, list_kelas_mapel }) => {
    // console.log(flash);
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Nilai Peserta Didik"
                breadcrumbs={["Kelola"]}
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
                                    <span className="mr-2">tahun ajaran :</span>
                                    <div className="mr-2">
                                        {/* <select
                                            className="form-control"
                                            onChange={(e) =>
                                                setSelectTahun(e.target.value)
                                            }
                                            defaultChecked={selectTahun}
                                        >
                                            {tahun_ajarans.map((d, i) => (
                                                <option key={i} value={d.id}>
                                                    {d.tahun_ajaran}
                                                </option>
                                            ))}
                                        </select> */}
                                    </div>
                                    {/* <button
                                        onClick={() => getTahunAjaran()}
                                        className="btn btn-info"
                                    >
                                        Cari
                                    </button> */}
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
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>Mapel</th>
                                        <th>Guru</th>
                                        <th>Kelas</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list_kelas_mapel?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{d.mapel.nama}</td>
                                            <td>{d.guru.nama}</td>
                                            <td>{d.kelas.nama}</td>
                                            <td>
                                                <Link
                                                    href={`/guru/nilai-peserta-didik/${d.kelas_id}/${d.guru_id}/${d.mapel_id}/1/detail_nilai_peserta_didik`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    semester 1
                                                </Link>
                                                <Link
                                                    href={`/guru/nilai-peserta-didik/${d.kelas_id}/${d.guru_id}/${d.mapel_id}/2/detail_nilai_peserta_didik`}
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
