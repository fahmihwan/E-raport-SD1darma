import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import { InputText } from "../../Components/InputEL";

const Detail_nilai_kepribadian = ({
    auth,
    detailCard,
    mengikuti_ajaran_id,
    semester,
    nilai_kepribadian,
}) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"Detail Nilai Kepribadian "}
                breadcrumbs={["Nilai kepribadian", "Detail nilai kepribadian"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href="/guru/nilai-kepribadian"
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

                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">
                                        Nilai kepribadian murid
                                    </span>
                                </div>
                                {nilai_kepribadian == null ? (
                                    <Link
                                        href={`/guru/nilai-kepribadian/${mengikuti_ajaran_id}/${semester}/create_nilai_kepribadian`}
                                        className="btn btn-primary"
                                    >
                                        Tambah Data
                                    </Link>
                                ) : (
                                    <Link
                                        href={`/guru/nilai-kepribadian/${mengikuti_ajaran_id}/${semester}/edit_nilai_kepribadian`}
                                        className="btn btn-warning"
                                    >
                                        Edit
                                    </Link>
                                )}
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-6">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Izin</td>
                                                <td>
                                                    {nilai_kepribadian?.izin}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sakit</td>
                                                <td>
                                                    {nilai_kepribadian?.sakit}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tanpa Keterangan</td>
                                                <td>
                                                    {
                                                        nilai_kepribadian?.tanpa_keterangan
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Sikap</td>
                                                <td>
                                                    {nilai_kepribadian?.sikap}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kerajinan</td>
                                                <td>
                                                    {
                                                        nilai_kepribadian?.kerajinan
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kebersihan dan kerapian</td>
                                                <td>
                                                    {
                                                        nilai_kepribadian?.kebersihan_dan_kerapian
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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

export default Detail_nilai_kepribadian;

const CardDetail = ({ data_murid, kelas, semester, tahun_ajaran }) => {
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
                                <td>Semester</td>
                                <td>: {semester}</td>
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
