import React, { useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import ReactSelect from "react-select";
import { HeaderLayout } from "../../Components/ComponentLayout";
import {
    InputText,
    InputRadioButton,
    InputTextArea,
} from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Edit = ({ auth, murid }) => {
    const tanggal = murid.tanggal_lahir.split("-");

    const { data, setData, put, processing, errors, reset } = useForm({
        nama: murid.nama,
        no_induk: murid.no_induk,
        jenis_kelamin: murid.jenis_kelamin,
        tempat_lahir: murid.tempat_lahir,
        tanggal_lahir: `${tanggal[2]}-${tanggal[1]}-${tanggal[0]}`,
        agama: murid.agama,
        alamat: murid.alamat,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        put(`/admin/murid/${murid.id}`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Edit Murid"
                breadcrumbs={["List Murid", "Edit Murid"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header ">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <span>Edit Murid</span>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        href="/admin/murid"
                                    >
                                        Kembali
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputText
                                                title="Nama"
                                                name="nama"
                                                placeholder="Input Nama"
                                                handleChange={handleChange}
                                                value={data.nama}
                                            />
                                            <InputText
                                                title="No induk"
                                                name="no_induk"
                                                placeholder="Input No Induk"
                                                handleChange={handleChange}
                                                value={data.no_induk}
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
                                                        checked={
                                                            data.jenis_kelamin
                                                        }
                                                    />
                                                    <InputRadioButton
                                                        title="Peremepuan"
                                                        name="jenis_kelamin"
                                                        value="P"
                                                        checked={
                                                            data.jenis_kelamin
                                                        }
                                                        handleChange={
                                                            handleChange
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <InputText
                                                title="Tempat Lahir"
                                                name="tempat_lahir"
                                                placeholder="Input Tempat Lahir"
                                                handleChange={handleChange}
                                                value={data.tempat_lahir}
                                            />
                                            <InputText
                                                type="date"
                                                title="tanggal_lahir"
                                                name="tanggal_lahir"
                                                placeholder="Input tanggal_lahir"
                                                handleChange={handleChange}
                                                value={data.tanggal_lahir}
                                            />
                                        </div>
                                        <div className="col-md-6 pl-3">
                                            <div className="form-group ">
                                                <label htmlFor={"agama"}>
                                                    agama
                                                </label>
                                                <select
                                                    value={data.agama}
                                                    onChange={handleChange}
                                                    name="agama"
                                                    className="form-control"
                                                >
                                                    <option value="Islam">
                                                        Islam
                                                    </option>
                                                    <option value="Protestan">
                                                        Protestan
                                                    </option>
                                                    <option value="Katolik">
                                                        Katolik
                                                    </option>
                                                    <option value="Hindu">
                                                        Hindu
                                                    </option>
                                                    <option value="Budha">
                                                        Budha
                                                    </option>
                                                    <option value="Khonghucu">
                                                        Khonghucu
                                                    </option>
                                                </select>
                                            </div>
                                            <InputTextArea
                                                title="alamat"
                                                name="alamat"
                                                placeholder="Input alamat"
                                                handleChange={handleChange}
                                                value={data.alamat}
                                            />

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
