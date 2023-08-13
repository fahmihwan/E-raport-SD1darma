import { Link, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ tahun_ajarans, auth }) => {
    const { datas, errors } = usePage().props;
    const [selectTahun, setSelectTahun] = useState(tahun_ajarans[0].id);

    const [listData, setListData] = useState();
    const getTahunAjaran = async () => {
        try {
            await axios
                .get(`/admin/get_kelas_tahun_ajaran/${selectTahun}`)
                .then((result) => {
                    let sortData = result?.data?.sort(function (a, b) {
                        return a?.kelas?.nama - b?.kelas?.nama;
                    });
                    setListData(sortData);
                })
                .catch((err) => {
                    console.log(err);
                    alert(err);
                });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    useEffect(() => {
        getTahunAjaran();
    }, []);

    const handleDelete = (e, id) => {
        e.preventDefault();
        confirm("apakah anda yakin ingin menghapus?") &&
            Inertia.delete(`/admin/mengikuti/${id}/mengikuti_kelas`);
        getTahunAjaran();
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Wali kelas"
                breadcrumbs={["List wali kelas"]}
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
                                        <select
                                            className="form-control"
                                            onChange={(e) =>
                                                setSelectTahun(e.target.value)
                                            }
                                            defaultChecked={selectTahun}
                                        >
                                            {tahun_ajarans?.map((d, i) => (
                                                <option key={i} value={d.id}>
                                                    {d.tahun_ajaran}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => getTahunAjaran()}
                                        className="btn btn-info"
                                    >
                                        Cari
                                    </button>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link
                                        href="/admin/mengikuti/create_kelas_tahun_ajaran_baru"
                                        className="btn btn-primary"
                                    >
                                        Tambah Data
                                    </Link>
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
                                        <th>Wali Kelas</th>
                                        <th>tahun_ajaran</th>
                                        {/* <th style={{ width: "50px" }}> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listData?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{d?.kelas?.nama}</td>
                                            <td>
                                                {d?.guru?.nama}
                                                {d?.guru?.deleted_at !==
                                                null ? (
                                                    <span className="text-danger">
                                                        &nbsp; (nonaktif)
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </td>
                                            <td>
                                                {d?.tahun_ajaran?.tahun_ajaran}
                                            </td>
                                            <td className="d-flex">
                                                <Link
                                                    href={`/admin/mengikuti/${d.id}/list_siswa`}
                                                    className="btn btn-info mr-2"
                                                >
                                                    Tambahkan Murid
                                                </Link>
                                                <Link
                                                    href={`/admin/mengikuti/${d.id}/mengikuti_kelas`}
                                                    className="btn btn-warning mr-2"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <button
                                                    className="btn btn-danger mr-2"
                                                    onClick={(e) =>
                                                        handleDelete(e, d.id)
                                                    }
                                                >
                                                    <i className="fas fa-solid fa-trash"></i>
                                                </button>
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
