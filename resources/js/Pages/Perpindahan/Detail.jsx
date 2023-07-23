import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Detail = ({ auth, murid, datas }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Detail murid"
                breadcrumbs={["perpindahan", "detail murid"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href="/admin/perpindahan"
                        className="btn btn-primary mb-2 float-right"
                    >
                        kembali
                    </Link>
                    <div className="clearfix"></div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">Detail murid</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <DetailCard murid={murid} />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List kelas</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>no</th>
                                        <th>kelas</th>
                                        <th>tahun ajaran</th>
                                        <th>detail rapor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{d?.kelas?.nama}</td>
                                            <td>
                                                {d?.tahun_ajaran?.tahun_ajaran}
                                            </td>
                                            <td>
                                                {/* <Link
                                                    href={`/admin/perpindahan/${d?.id}/${murid?.id}/detail_rapor`}
                                                    className="btn btn-info"
                                                >
                                                    Detail Rapor
                                                </Link> */}
                                                <Link
                                                    href={`/admin/perpindahan/${d?.id}/${murid?.id}/1/detail_rapor`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    semester 1
                                                </Link>
                                                <Link
                                                    href={`/admin/perpindahan/${d?.id}/${murid?.id}/2/detail_rapor`}
                                                    className="btn btn-info"
                                                >
                                                    semester 2
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Detail;

const DetailCard = ({ murid }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: "200px" }}>Nama</td>
                            <td>: {murid?.nama}</td>
                        </tr>
                        <tr>
                            <td>No induk</td>
                            <td>: {murid?.no_induk}</td>
                        </tr>
                        <tr>
                            <td>Tempat lahir & tanggal lahir</td>
                            <td>
                                : {murid?.tempat_lahir},{murid?.tanggal_lahir}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: "200px" }}>Jenis kelamin</td>
                            <td>: {murid?.jenis_kelamin}</td>
                        </tr>
                        <tr>
                            <td>Agama</td>
                            <td>: {murid?.agama}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>: {murid?.alamat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
