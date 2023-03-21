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

const Create = ({
    guru_detail,
    tahun_ajaran_detail,
    list_kelas,
    list_mapel,
    tahun_ajaran_id,
    datas,
}) => {
    console.log(guru_detail);
    const { data, setData, post, processing, errors, reset } = useForm({
        tahun_ajaran_id: tahun_ajaran_id,
        kelas_id: "",
        guru_id: guru_detail.id,
        mapel_id: "",
    });

    const [optionKelas, setOptionKelas] = useState(null);
    const [optionMapels, setOptionMapels] = useState(null);

    useEffect(() => {
        let kelas = list_kelas.map((d) => ({
            value: d.id,
            label: d.nama,
        }));
        let mapel = list_mapel.map((d) => ({
            value: d.id,
            label: d.nama,
        }));
        setOptionKelas(kelas);
        setOptionMapels(mapel);
    }, []);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        post("/admin/mengajar");
    };

    return (
        <AuthenticatedLayout>
            <HeaderLayout
                title="Tambah Guru"
                breadcrumbs={["List Guru", "Tambah Guru"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header ">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <span>Tambah Guru</span>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            href={`/admin/mengajar/${tahun_ajaran_id}`}
                                        >
                                            Kembali
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div
                                                    href="#"
                                                    className="list-group-item list-group-item-action mb-2"
                                                >
                                                    <h5 className="mb-0">
                                                        {guru_detail.nama}
                                                    </h5>
                                                    <span className="text-muted">
                                                        Nip. {guru_detail.nip}
                                                    </span>
                                                    <p className="">
                                                        {
                                                            guru_detail.kelas
                                                                ?.nama
                                                        }
                                                    </p>
                                                </div>

                                                <div className="form-group">
                                                    <label>Kelas</label>
                                                    <SelectSearch
                                                        handleChange={(e) =>
                                                            setData(
                                                                "kelas_id",
                                                                e.value
                                                            )
                                                        }
                                                        options={optionKelas}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Mapel</label>
                                                    <SelectSearch
                                                        handleChange={(e) =>
                                                            setData(
                                                                "mapel_id",
                                                                e.value
                                                            )
                                                        }
                                                        options={optionMapels}
                                                    />
                                                </div>
                                                <div className="">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    Tahun Ajaran :{" "}
                                    <span className="text-danger font-weight-bold">
                                        {tahun_ajaran_detail}
                                    </span>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">kelas</th>
                                            <th scope="col">mapel</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas.map((d, i) => (
                                            <tr key={i}>
                                                <th scope="row">1</th>
                                                <td>{d.kelas.nama}</td>
                                                <td>{d.mapel.nama}</td>
                                                <td>
                                                    <button className="btn btn-danger">
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
        </AuthenticatedLayout>
    );
};

export default Create;
