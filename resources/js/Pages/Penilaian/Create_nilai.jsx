import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create_nilai = ({ mengikuti_kelas, mapel, semester, auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        data: [],
        semester: semester, //static
        mapel_id: mapel.id, //static
        kelas_id: mengikuti_kelas.kelas_id,
    });

    useEffect(() => {
        let setMultipleData = mengikuti_kelas?.mengikuti_ajarans?.map((d) => {
            return {
                no_induk: d.murid.no_induk,
                nama: d.murid.nama,
                mengikuti_ajaran_id: d.id,
                nilai: "",
            };
        });
        setData("data", setMultipleData);
    }, []);

    const handleChange = (i, e) => {
        const { name, value } = e.target;
        const list = [...data.data];
        list[i][name] = value;
        setData("data", list);
    };

    const handleSubmit = () => {
        post(`/guru/penilaian/store_nilai`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Input Nilai Murid"
                breadcrumbs={["List Murid"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <HeaderInfoEl
                                mengikuti_kelas={mengikuti_kelas}
                                mapel={mapel}
                                semester={semester}
                            />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">List Murid :</span>
                                    <div className="mr-2"></div>
                                </div>
                                <div className="d-flex align-items-center"></div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>No Induk</th>
                                            <th>Nama</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.data?.map((d, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{d?.no_induk}</td>
                                                <td>{d?.nama}</td>
                                                <td>
                                                    <input
                                                        required
                                                        value={d?.nilai}
                                                        onChange={(e) =>
                                                            handleChange(i, e)
                                                        }
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="nilai"
                                                        name="nilai"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-2"
                                >
                                    submit
                                </button>
                            </form>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix"></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create_nilai;

const HeaderInfoEl = ({ mengikuti_kelas, mapel, semester }) => {
    return (
        <div className="card  bg-info p-2">
            <div className="row ">
                <div className="col-3 ">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td className="text-warning">Guru </td>
                                <td>: {mengikuti_kelas?.guru?.nama}</td>
                            </tr>
                            <tr>
                                <td className="text-warning">Nip </td>
                                <td>: {mengikuti_kelas?.guru?.nip}</td>
                            </tr>
                            <tr>
                                <td className="text-warning">Kelas </td>
                                <td>: {mengikuti_kelas?.kelas?.nama}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-3">
                    {/* <h3>{mapel.nama}</h3>
                    <h4>Semester {semester}</h4> */}
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td className="text-warning">Mapel </td>
                                <td>: {mapel?.nama}</td>
                            </tr>
                            <tr>
                                <td className="text-warning">Tahun ajaran </td>
                                <td>
                                    :{" "}
                                    {
                                        mengikuti_kelas?.tahun_ajaran
                                            ?.tahun_ajaran
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="text-warning">Semester</td>
                                <td>: {semester}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
