import { Link } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import { ExportBlob } from "../../Components/ExportBlob";

const Detail_nilai_murid = ({
    nilai,
    detailCard,
    nilai_kepribadian,
    auth,
    var_get,
    detail_perolehan,
    nilai_ekstrakurikulers,
    ranking,
    menu,
}) => {
    let navigationBack = "";
    let breadcrumbs = [];
    if (menu == "perpindahan") {
        navigationBack = `/admin/perpindahan/${var_get?.murid_id}/detail`;
        breadcrumbs = ["perpindahan", "detail murid", "detail nilai rapor"];
    }
    if (menu == "guru") {
        navigationBack = "/guru/rapor-murid";
        breadcrumbs = ["Rapor murid", "Detail nilai rapor"];
    }
    if (menu == "admin") {
        navigationBack = `/admin/rapor-murid/${var_get?.murid_id}/detail`;
        breadcrumbs = ["Rapor murid", "Detail nilai rapor"];
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"Detail nilai rapor"}
                breadcrumbs={breadcrumbs}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href={navigationBack}
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
                                    <span className="mr-2">Nilai Rapor </span>
                                </div>
                                <a
                                    href={`/export-rapor/${var_get?.mengikuti_kelas_id}/${var_get?.murid_id}/${var_get?.semester}/detail_rapor`}
                                    // onClick={() =>
                                    //     ExportBlob(
                                    //         `/export-rapor/${var_get?.mengikuti_kelas_id}/${var_get?.murid_id}/${var_get?.semester}/detail_rapor`,
                                    //         "detail_rapor.pdf"
                                    //     )
                                    // }
                                    className="btn btn-primary"
                                >
                                    Print
                                </a>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="text-uppercase">
                                                <th style={{ width: "20px" }}>
                                                    No
                                                </th>
                                                <th>Mata Pelajaran</th>
                                                <th>KKM</th>
                                                <th>Nilai</th>
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
                                        <tfoot>
                                            <tr>
                                                <td colSpan={2}>JUMLAH</td>
                                                <td></td>
                                                <td>
                                                    {detail_perolehan.jumlah}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>RATA-RATA</td>
                                                <td></td>
                                                <td>
                                                    {detail_perolehan.rata_rata}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>PERINGKAT</td>
                                                <td></td>
                                                <td>{ranking}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <p>Nilai Kepribadian</p>
                            <div className="row">
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
                        <div className="card-body">
                            <p>Nilai ekstrakurikuler : </p>
                            <div className="row">
                                <div
                                    className="col-md-6 border"
                                    style={{ height: "200px" }}
                                >
                                    <table className="">
                                        <tbody>
                                            {nilai_ekstrakurikulers
                                                ?.filter(
                                                    (d) =>
                                                        d.nilai !=
                                                        "tidak mengikuti"
                                                )
                                                ?.map((d, i) => (
                                                    <tr
                                                        key={i}
                                                        className="text-lg"
                                                    >
                                                        <td className="pr-4">
                                                            -{" "}
                                                            {
                                                                d
                                                                    ?.ekstrakurikuler
                                                                    ?.nama
                                                            }
                                                        </td>
                                                        <td>{d?.nilai}</td>
                                                    </tr>
                                                ))}
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

export default Detail_nilai_murid;

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
