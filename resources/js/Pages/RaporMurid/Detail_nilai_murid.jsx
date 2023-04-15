import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

// 'datas' => $datas,
// 'tahun_ajaran' => $tahun_ajaran,
// 'semester' => $semester,
// 'guru' => $view_guru
const Detail_nilai_murid = ({ nilai, detailCard, auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"List Nilai Peserta Didik"}
                breadcrumbs={[
                    "Nilai Peserta Didik",
                    "List Nilai Peserta Didik",
                ]}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href="/guru/rapor-murid"
                        className="btn btn-primary mb-2  float-right"
                    >
                        kembali
                    </Link>
                    <div className="clearfix"></div>
                    <CardDetail
                        data_murid={detailCard?.data_murid}
                        kelas={detailCard?.kelas}
                        semester={detailCard?.semester}
                        tahun_ajaran={detailCard?.tahun_ajaran}
                    />

                    {/*  */}

                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">
                                        tahun ajaran :{" "}
                                        {/* {tahun_ajaran.tahun_ajaran} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "20px" }}>
                                                No
                                            </th>
                                            <th>Mata Pelajaran</th>
                                            <th>KKM</th>
                                            <th>Nilai Siswa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nilai?.map((d, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{d?.mapel?.nama}</td>
                                                <td>{d?.mapel?.kkm}</td>
                                                <td> {d?.nilai}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix"></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Detail_nilai_murid;

const CardDetail = ({ data_murid, kelas, semester, tahun_ajaran }) => {
    return (
        <div className="card p-2">
            <div className="row">
                <div className="col-md-6">
                    <h3>Detail :</h3>
                    <table>
                        <tr>
                            <td style={{ width: "100px" }}>Nama Siswa</td>
                            <td>: {data_murid.murid.nama}</td>
                        </tr>
                        <tr>
                            <td>Nomor Induk</td>
                            <td>: {data_murid.murid.no_induk}</td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>&nbsp;</h3>
                    <table>
                        <tr>
                            <td style={{ width: "100px" }}>Tahun ajaran</td>
                            <td>: {tahun_ajaran}</td>
                        </tr>
                        <tr>
                            <td>Semester</td>
                            <td>: {semester}</td>
                        </tr>
                        <tr>
                            <td>Kelas</td>
                            <td>: {kelas}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
