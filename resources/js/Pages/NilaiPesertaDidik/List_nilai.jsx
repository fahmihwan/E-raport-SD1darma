import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const List_nilai = ({ datas, tahun_ajaran, semester, guru, mapel, auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"Detail Nilai "}
                breadcrumbs={["Nilai peserta didik", "Detail nilai"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href="/guru/nilai-peserta-didik"
                        className="btn btn-primary mb-2  float-right"
                    >
                        kembali
                    </Link>
                    <div className="clearfix"></div>
                    <CardDetail
                        guru={guru?.nama}
                        nip={guru?.nip}
                        mapel={mapel}
                        tahun_ajaran={tahun_ajaran.tahun_ajaran}
                        semester={semester}
                    />

                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">
                                        tahun ajaran :{" "}
                                        {tahun_ajaran.tahun_ajaran}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="mr-3">
                                        Semester {semester}
                                    </span>
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>No Induk</th>
                                            <th style={{ width: "200px" }}>
                                                Nama
                                            </th>
                                            <th style={{ width: "80px" }}>
                                                Nilai Tugas
                                            </th>
                                            <th style={{ width: "80px" }}>
                                                Nilai UH
                                            </th>
                                            <th style={{ width: "80px" }}>
                                                Nilai &nbsp;
                                                {semester == 1 ? "UTS" : "UAS"}
                                            </th>
                                            <th>Capaian Kompetensi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas?.map((d, i) => (
                                            <ElTrValue key={i} d={d} i={i} />
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

export default List_nilai;

const CardDetail = ({ guru, nip, mapel, tahun_ajaran, semester }) => {
    return (
        <div className="card p-2">
            <div className="row">
                <div className="col-md-6">
                    <h3>Detail :</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "100px" }}>Guru</td>
                                <td>: {guru}</td>
                            </tr>
                            <tr>
                                <td>NIP</td>
                                <td>: {nip}</td>
                            </tr>
                            <tr>
                                <td>Mengajar</td>
                                <td>: {mapel}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>&nbsp;</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "100px" }}>Tahun ajaran</td>
                                <td>: {tahun_ajaran}</td>
                            </tr>
                            <tr>
                                <td>Semester</td>
                                <td>: {semester}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const ElTrValue = ({ d, i }) => {
    return (
        <>
            <tr>
                <td rowSpan={2}>{i + 1}</td>
                <td rowSpan={2}>{d?.mengikuti_ajaran?.murid?.no_induk}</td>

                <td rowSpan={2}>{d?.mengikuti_ajaran?.murid?.nama}</td>
                <td rowSpan={2}>{d?.nilai_tugas}</td>
                <td rowSpan={2}>{d?.nilai_harian}</td>
                <td rowSpan={2}>{d?.nilai_semester}</td>
                <td className="p-1">
                    <p className="p-0 m-0">Menunjukan penguasaan dalam : </p>
                    <span className="font-weight-light">{d?.penguasaan}</span>
                </td>
            </tr>
            <tr>
                <td className="p-1">
                    <p className="p-0 m-0">Perlu bantuan dalam: </p>
                    <span className="font-weight-light">{d?.bantuan}</span>
                </td>
            </tr>
        </>
    );
};
