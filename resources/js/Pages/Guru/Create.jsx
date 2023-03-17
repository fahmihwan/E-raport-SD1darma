import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import {
    InputText,
    InputRadioButton,
    InputTextArea,
} from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create = () => {
    const { data, setData, post, processing, reset } = useForm({
        nip: "",
        nama: "",
        jenis_kelamin: "",
        username: "",
        password: "",
        alamat: "",
        telp: "",
        wali_kelas: "",
    });
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        // await post("/admin/master/kelas");
    };
    return (
        <AuthenticatedLayout>
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
                                        <div className="form-group">
                                            <label>Jenis Kelamin</label>
                                            <div className="d-flex">
                                                <InputRadioButton
                                                    title="Laki-Laki"
                                                    name="jenis_kelamin"
                                                    value="P"
                                                    handleChange={handleChange}
                                                />
                                                <InputRadioButton
                                                    title="Peremepuan"
                                                    name="jenis_kelamin"
                                                    value="L"
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pl-3">
                                        <InputText
                                            title="Username"
                                            name="username"
                                            placeholder="Input Username"
                                            handleChange={handleChange}
                                            value={data.nip}
                                        />
                                        <InputTextArea
                                            title="alamat"
                                            name="alamat"
                                            placeholder="Input alamat"
                                            handleChange={handleChange}
                                            value={data.alamat}
                                        />
                                        <div className="form-group">
                                            <label>Minimal</label>
                                            <select
                                                className="form-control select2"
                                                style={{ width: "100%" }}
                                            >
                                                <option selected="selected">
                                                    Alabama
                                                </option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                        {/* <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">
                                                Example textarea
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div> */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
