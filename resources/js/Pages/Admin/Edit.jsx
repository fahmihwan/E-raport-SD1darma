import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { InputText } from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Edit = ({ auth, admin }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        nama: admin.nama,
        username: admin.username,
        password: "",
        changePassword: false,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        put(`/admin/akun/${admin.id}`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Tambah Akun"
                breadcrumbs={["List Akun", "Tambah Akun"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header ">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <span>Tambah Akun</span>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        href="/admin/akun"
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
                                                title="Username"
                                                name="username"
                                                placeholder="Input Username"
                                                handleChange={handleChange}
                                                value={data.username}
                                            />
                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                    id="defaultCheck1"
                                                    onChange={() =>
                                                        setData(
                                                            "changePassword",
                                                            !data.changePassword
                                                        )
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="defaultCheck1"
                                                >
                                                    ubah password ?
                                                </label>
                                            </div>

                                            {data.changePassword && (
                                                <InputText
                                                    type="password"
                                                    title="UbahPassword"
                                                    name="password"
                                                    placeholder="Input Password"
                                                    handleChange={handleChange}
                                                    value={data.password}
                                                />
                                            )}
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
