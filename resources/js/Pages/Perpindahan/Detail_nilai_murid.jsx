import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Detail_nilai_murid = ({
    nilai,
    detailCard,
    nilai_kepribadian,
    auth,
    redirect_back,
}) => {
    console.log(redirect_back);
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"Detail nilai rapor"}
                breadcrumbs={[
                    "perpindahan",
                    "detail murid",
                    "detail nilai rapor",
                ]}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href={`/admin/perpindahan/${redirect_back?.murid_id}/detail`}
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
                                    <span className="mr-2">Semester 1</span>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <NilaiMapelsEl
                                        nilai_mapel={nilai}
                                        semester={1}
                                    />
                                </div>
                            </div>
                            <p>Nilai Kepribadian</p>
                            <div className="row">
                                {nilai_kepribadian
                                    ?.filter((d) => d.semester == 1)
                                    .map((d, i) => (
                                        <NilaiKepribadiansEl
                                            semester={1}
                                            key={i}
                                            nilai_kepribadian={d}
                                        />
                                    ))}
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix"></div>
                    </div>
                    <div className="card mb-5">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">Semester 2</span>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <NilaiMapelsEl
                                        nilai_mapel={nilai}
                                        semester={2}
                                    />
                                </div>
                            </div>
                            <p>Nilai Kepribadian</p>
                            <div className="row">
                                {nilai_kepribadian
                                    ?.filter((d) => d.semester == 2)
                                    .map((d, i) => (
                                        <NilaiKepribadiansEl
                                            semester={2}
                                            key={i}
                                            nilai_kepribadian={d}
                                        />
                                    ))}
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

const NilaiMapelsEl = ({ nilai_mapel, semester }) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th style={{ width: "20px" }}>No</th>
                    <th>Mata Pelajaran</th>
                    <th>KKM</th>
                    <th>Nilai Siswa</th>
                </tr>
            </thead>
            <tbody>
                {nilai_mapel
                    ?.filter((d) => d.semester == semester)
                    .map((d, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{d?.mapel?.nama}</td>
                            <td>{d?.mapel?.kkm}</td>
                            <td> {d?.nilai}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
const NilaiKepribadiansEl = ({ nilai_kepribadian }) => {
    return (
        <>
            <div className="col-md-6">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Izin</td>
                            <td>{nilai_kepribadian?.izin}</td>
                        </tr>
                        <tr>
                            <td>Sakit</td>
                            <td>{nilai_kepribadian?.sakit}</td>
                        </tr>
                        <tr>
                            <td>Tanpa Keterangan</td>
                            <td>{nilai_kepribadian?.tanpa_keterangan}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Sikap</td>
                            <td>{nilai_kepribadian?.sikap}</td>
                        </tr>
                        <tr>
                            <td>Kerajinan</td>
                            <td>{nilai_kepribadian?.kerajinan}</td>
                        </tr>
                        <tr>
                            <td>Kebersihan dan kerapian</td>
                            <td>
                                {nilai_kepribadian?.kebersihan_dan_kerapian}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const CardDetail = ({ data_murid, kelas, tahun_ajaran }) => {
    return (
        <div className="card p-2">
            <div className="row">
                <div className="col-md-6">
                    <h3>Detail :</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "100px" }}>Nama Siswa</td>
                                <td>: {data_murid.murid.nama}</td>
                            </tr>
                            <tr>
                                <td>Nomor Induk</td>
                                <td>: {data_murid.murid.no_induk}</td>
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
                                <td>Kelas</td>
                                <td>: {kelas}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
