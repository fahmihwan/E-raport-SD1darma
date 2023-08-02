import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create_nilai = ({
    mengikuti_kelas,
    mapel,
    semester,
    auth,
    redirect_back,
}) => {
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
                nilai_tugas: "",
                nilai_harian: "",
                nilai_semester: "",
                penguasaan: "",
                bantuan: "",
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
        post(`/guru/penilaian/store_nilai`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Nilai Murid"
                breadcrumbs={["Nilai mengajar", "List kelas", "Nilai murid"]}
            />

            <div className="content">
                <div className="container-fluid">
                    <Link
                        href={`/guru/penilaian/${redirect_back?.kelas_id}/${redirect_back?.mapel_id}/${redirect_back?.semester}/list_nilai`}
                        className="btn btn-primary mb-2 float-right"
                    >
                        kembali
                    </Link>
                    <div className="clearfix"></div>
                    <div className="card">
                        <div className="card-header">
                            <HeaderInfoEl
                                mengikuti_kelas={mengikuti_kelas}
                                mapel={mapel}
                                semester={semester}
                            />
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>No Induk</th>
                                            <th style={{ width: "200px" }}>
                                                Nama
                                            </th>
                                            <th>Nilai Tugas</th>
                                            <th>Nilai UH</th>
                                            <th>
                                                Nilai &nbsp;
                                                {semester == 1 ? "UTS" : "UAS"}
                                            </th>
                                            <th style={{ width: "400px" }}>
                                                Capaian Kompetensi
                                            </th>
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
                                                <td>
                                                    <label
                                                        htmlFor={
                                                            "penguasaan-" + i
                                                        }
                                                    >
                                                        Menunjukan penguasaan
                                                        dalam :{" "}
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        value={d?.penguasaan}
                                                        onChange={(e) =>
                                                            handleChange(i, e)
                                                        }
                                                        name="penguasaan"
                                                        id={"penguasaan-" + i}
                                                        cols="30"
                                                        rows="2"
                                                    ></textarea>
                                                    <label
                                                        htmlFor={"bantuan-" + i}
                                                    >
                                                        Perlu bantuan dalam :{" "}
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        value={d?.bantuan}
                                                        onChange={(e) =>
                                                            handleChange(i, e)
                                                        }
                                                        name="bantuan"
                                                        id={"bantuan-" + i}
                                                        cols="30"
                                                        rows="2"
                                                    ></textarea>
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
                <div className="col-4 ">
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
                <div className="col-5">
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
