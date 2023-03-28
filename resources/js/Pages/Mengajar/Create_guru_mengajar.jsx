import React, { useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import ReactSelect from "react-select";
import { HeaderLayout } from "../../Components/ComponentLayout";
import {
    InputText,
    InputRadioButton,
    InputTextArea,
    SelectSearch,
} from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create_guru_mengajar = ({ kelas, gurus, mapel, auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        guru_id: "",
        kelas_id: "",
        mapel_id: "",
    });
    let optionKelas = kelas.map((d) => ({ value: d.id, label: d.nama }));
    let optionGurus = gurus.map((d) => ({ value: d.id, label: d.nama }));
    let optionMapel = mapel.map((d) => ({ value: d.id, label: d.nama }));

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/mengajar/guru_mengajar");
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Tambah Guru"
                breadcrumbs={["List Guru", "Tambah Guru"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header ">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <span>Tambah Guru</span>
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
                                            <label>Guru</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("guru_id", e.value)
                                                }
                                                options={optionGurus}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Kelas</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("kelas_id", e.value)
                                                }
                                                options={optionKelas}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Mapel</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("mapel_id", e.value)
                                                }
                                                options={optionMapel}
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create_guru_mengajar;
