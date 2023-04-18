import { useForm } from "@inertiajs/inertia-react";
import React from "react";

const Login = ({ flash }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        akses: "guru",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/auth/");
        // console.log(data);
    };
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1">
                            {/* <b>SD DAHROMO</b> */}
                            <b>E-RAPORT</b>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            {/* Sign in to start your session */}
                            SD DAHROMO
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="username"
                                    onChange={handleChange}
                                    value={data.username}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={data.password}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <select
                                    className="custom-select"
                                    id="inputGroupSelect02"
                                    defaultValue={data.akses}
                                    name="akses"
                                    onChange={handleChange}
                                >
                                    <option value={"guru"}> Guru</option>
                                    <option value={"admin"}>Admin</option>
                                </select>
                                <div className="input-group-append">
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupSelect02"
                                    >
                                        Akses
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mx-2"
                                >
                                    Login
                                </button>
                                {/* /.col */}
                            </div>
                        </form>

                        <div className="social-auth-links text-center mt-2 mb-3"></div>
                        {flash?.error_message && (
                            <p className="text-danger text-center">
                                Username atau Password Salah
                            </p>
                        )}
                        {/* /.social-auth-links */}
                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>
    );
};

export default Login;
