import React, { useState, useEffect, useRef } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";

import { HeaderLayout } from "../../Components/ComponentLayout";
import { SelectSearch } from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

const Create_mengajar_mapel = ({ guru_mengajar, kelas, mapel, guru, auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kelas_id: "",
        mapel_id: "",
        guru_id: guru.id,
    });

    let optionKelas = kelas.map((d) => ({ value: d.id, label: d.nama }));
    let optionMapel = mapel.map((d) => ({
        value: d.id,
        label: `${[d.kode_mapel]} - ${d.nama}`,
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post("/admin/mengajar/mengajar_mapel");
    };

    const handleDelete = (id) => {
        confirm("Apakah anda yakin ingin menghapus?") &&
            Inertia.delete(`/admin/mengajar/mengajar_mapel/${id}`);
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Kelola mapel"
                breadcrumbs={["List guru Pengajar", "Kelola mapel"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header ">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <span>Tambah mapel guru</span>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            href={`/admin/mengajar`}
                                        >
                                            Kembali
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <div className="card bg-info">
                                                <ul
                                                    className="px-2"
                                                    style={{
                                                        listStyleType: "none",
                                                    }}
                                                >
                                                    <li>
                                                        <span className=" text-bold">
                                                            {guru.nama}
                                                        </span>
                                                    </li>
                                                    <li>NIP. {guru.nip}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>mapel</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("mapel_id", e.value)
                                                }
                                                options={optionMapel}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>kelas</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("kelas_id", e.value)
                                                }
                                                options={optionKelas}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">List mengajar</div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Kelas</th>
                                                <th scope="col">Mapel</th>
                                                <th scope="col">#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {guru_mengajar?.map((d, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{d?.kelas?.nama}</td>
                                                    <td>
                                                        [{d?.mapel?.kode_mapel}]
                                                        - {d?.mapel?.nama}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    d.id
                                                                )
                                                            }
                                                        >
                                                            <i className="fas fa-solid fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create_mengajar_mapel;
