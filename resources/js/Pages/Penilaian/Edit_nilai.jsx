import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Edit_nilai = ({ datas, mapel, semester, kelas, auth }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        data: [],
        semester: semester, //static
        mapel_id: mapel.id, //static
        kelas_id: kelas.id,
    });

    useEffect(() => {
        // console.log(datas[0].nilai_harian);
        let setMultipleData = datas?.map((d) => {
            return {
                no_induk: d.mengikuti_ajaran.murid.no_induk,
                nama: d.mengikuti_ajaran.murid.nama,
                mengikuti_ajaran_id: d.mengikuti_ajaran_id,
                nilai_tugas: d?.nilai_tugas,
                nilai_harian: d?.nilai_harian,
                nilai_semester: d?.nilai_semester,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        put("/guru/penilaian");
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Edit Nilai Murid"
                breadcrumbs={["List Murid"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            {/* <HeaderInfoEl
                                mengikuti_kelas={mengikuti_kelas}
                                mapel={mapel}
                                semester={semester}
                            /> */}
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
                                            <th>Nilai Tugas</th>
                                            <th>Nilai UH</th>
                                            <th>
                                                Nilai &nbsp;
                                                {semester == 1 ? "UTS" : "UAS"}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.data?.map((d, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{d?.no_induk}</td>
                                                <td>{d?.nama}</td>
                                                <td>
                                                    <input
                                                        required
                                                        value={d?.nilai_tugas}
                                                        onChange={(e) =>
                                                            handleChange(i, e)
                                                        }
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="nilai"
                                                        name="nilai_tugas"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        required
                                                        value={d?.nilai_harian}
                                                        onChange={(e) =>
                                                            handleChange(i, e)
                                                        }
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="nilai"
                                                        name="nilai_harian"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        required
                                                        value={
                                                            d?.nilai_semester
                                                        }
                                                        onChange={(e) =>
                                                            handleChange(i, e)
                                                        }
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="nilai"
                                                        name="nilai_semester"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button
                                    // onClick={handleSubmit}
                                    type="submit"
                                    className="btn btn-primary mt-2"
                                >
                                    Update
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

export default Edit_nilai;

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
