import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import {
    InputRadioButton,
    InputText,
    InputTextArea,
} from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create_siswa_baru = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        no_induk: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        agama: "",
        alamat: "",
        wali_murid: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        post("/admin/guru");
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Tambah Siswa Baru"
                breadcrumbs={["List Siswa Baru", "Tambah Guru"]}
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
                                        href=""
                                    >
                                        Kembali belum
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
                                                <select className="form-control">
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
                                                </select>
                                            </div>
                                            <InputTextArea
                                                title="alamat"
                                                name="alamat"
                                                placeholder="Input alamat"
                                                handleChange={handleChange}
                                                value={data.alamat}
                                            />
                                            <InputText
                                                title="Wali Murid"
                                                name="wali_murid"
                                                placeholder="Input Wali murid"
                                                handleChange={handleChange}
                                                value={data.wali_murid}
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

export default Create_siswa_baru;
