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

const Create = ({ auth }) => {
    const [optionKelas, setOptionKelas] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        tahun_ajaran_id: "",
        kelas_id: "",
        mapel_id: "",
    });

    // const handleChange = (e) => {
    //     setData(e.target.name, e.target.value);
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     post("/admin/guru");
    // };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Tambah Guru"
                breadcrumbs={["List Guru", "Tambah Guru"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header ">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <span>Tambah Guru</span>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        href="/admin/guru"
                                    >
                                        Kembali
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                {/* <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputText
                                                title="Nip"
                                                name="nip"
                                                placeholder="Input Nip"
                                                handleChange={handleChange}
                                                value={data.nip}
                                            />
                                            <InputText
                                                title="Nama"
                                                name="nama"
                                                placeholder="Input Nama"
                                                handleChange={handleChange}
                                                value={data.nama}
                                            />
                                            <InputTextArea
                                                title="alamat"
                                                name="alamat"
                                                placeholder="Input alamat"
                                                handleChange={handleChange}
                                                value={data.alamat}
                                            />
                                            <div className="form-group">
                                                <label>Jenis Kelamin</label>
                                                <div className="d-flex">
                                                    <InputRadioButton
                                                        title="Laki-Laki"
                                                        name="jenis_kelamin"
                                                        value="L"
                                                        handleChange={
                                                            handleChange
                                                        }
                                                    />
                                                    <InputRadioButton
                                                        title="Peremepuan"
                                                        name="jenis_kelamin"
                                                        value="P"
                                                        handleChange={
                                                            handleChange
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-3">
                                            <div className="form-group">
                                                <label>Wali Kelas</label>
                                                <SelectSearch
                                                    handleChange={(e) =>
                                                        setData(
                                                            "wali_kelas",
                                                            e.value
                                                        )
                                                    }
                                                    options={optionKelas}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <InputText
                                                    title="Telp"
                                                    name="telp"
                                                    placeholder="Input telp"
                                                    handleChange={handleChange}
                                                    value={data.telp}
                                                />
                                            </div>

                                            <br />

                                            <p className="underline">Account</p>
                                            <hr />
                                            <InputText
                                                title="Username"
                                                name="username"
                                                placeholder="Input Username"
                                                handleChange={handleChange}
                                                value={data.username}
                                            />
                                            <InputText
                                                title="Password"
                                                name="password"
                                                type="password"
                                                placeholder="Input Username"
                                                handleChange={handleChange}
                                                value={data.password}
                                            />

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
