import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { InputText, SelectSearch } from "../../Components/InputEL";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ kelas, auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="List Mengikuti Kelas"
                breadcrumbs={["Kelola"]}
            />
            <div className="content">
                <div className="container-fluid">
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
                                        <th>Kelas</th>
                                        <th>Mapel</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kelas?.map((d, i) => (
                                        <tr key={i}>
                                            <td>1</td>
                                            <td>
                                                {d.mengikuti_kelas.kelas.nama}
                                            </td>
                                            <td>{d.mapel.nama}</td>
                                            <td>
                                                <Link
                                                    href={`/guru/penilaian/${d?.mengikuti_kelas?.kelas_id}/${d.mapel_id}/1/list_nilai`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    Semester 1
                                                </Link>
                                                <Link
                                                    href={`/guru/penilaian/${d?.mengikuti_kelas?.kelas_id}/${d.mapel_id}/2/list_nilai`}
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
