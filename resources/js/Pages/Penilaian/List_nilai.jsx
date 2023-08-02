import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const List_nilai = ({
    tahun_ajaran,
    kelas_id,
    mapel_id,
    datas,
    kelas_nama,
    semester,
    auth,
}) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"List " + kelas_nama}
                breadcrumbs={["Nilai mengajar", `List kelas `]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">
                                        Tahun ajaran :{" "}
                                        {tahun_ajaran.tahun_ajaran},
                                    </span>
                                    <span className="mr-3 p-1 rounded">
                                        Semester {semester}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link
                                        href="/guru/penilaian"
                                        className="btn btn-primary"
                                    >
                                        kembali
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="d-flex align-items-center  col-md-12 mb-2">
                                    {datas.length == 0 ? (
                                        <Link
                                            className="btn btn-sm btn-primary"
                                            href={`/guru/penilaian/${kelas_id}/${mapel_id}/${semester}/create_nilai`}
                                        >
                                            Masukan Nilai
                                        </Link>
                                    ) : (
                                        <Link
                                            className="btn btn-sm btn-warning"
                                            href={`/guru/penilaian/${kelas_id}/${mapel_id}/${semester}/edit_nilai`}
                                        >
                                            Edit nilai
                                        </Link>
                                    )}
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
                                            <th>Capaian Kompetensi </th>
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
