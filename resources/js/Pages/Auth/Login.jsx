import React from "react";

const Login = () => {
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1">
                            <b>Admin</b>LTE
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            Sign in to start your session
                        </p>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
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
                                    placeholder="Password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
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
                        {/* /.social-auth-links */}
                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>
    );
};

export default Login;
