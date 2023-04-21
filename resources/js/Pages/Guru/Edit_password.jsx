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

const Edit = ({ auth, guru, flash }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        password_lama: "",
        password_baru: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        put(`/guru/auth/edit_password`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="ubah password"
                breadcrumbs={["ubah password"]}
            />

            <div className="content">
                <div className="container-fluid">
                    <div className="col-md-8">
                        {flash?.error_message && (
                            <div className="alert alert-danger" role="alert">
                                {flash?.error_message}
                            </div>
                        )}

                        <div className="card">
                            <div className="card-header ">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <span>Ubah password</span>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        href="/guru/penilaian"
                                    >
                                        Kembali
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <InputText
                                        title="password lama"
                                        name="password_lama"
                                        placeholder="Input password"
                                        handleChange={handleChange}
                                        value={data.password_lama}
                                    />
                                    <InputText
                                        title="password baru"
                                        name="password_baru"
                                        placeholder="Input password"
                                        handleChange={handleChange}
                                        value={data.password_baru}
                                    />
                                    <InputText
                                        title="confirm password"
                                        name="confirm_password"
                                        placeholder="Input password"
                                        handleChange={handleChange}
                                        value={data.confirm_password}
                                    />
                                    <div className="col-md-6 pl-3">
                                        <br />

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            update
                                        </button>
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
