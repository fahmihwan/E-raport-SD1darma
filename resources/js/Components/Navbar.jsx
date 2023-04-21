import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export const Navbar = ({ setToggleSidebar, toggleSidebar, auth }) => {
    const handleLogout = () => {
        Inertia.post("/admin/auth/logout");
    };
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="pushmenu"
                        href="#"
                        role="button"
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                    >
                        <i className="fas fa-bars" />
                    </a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-navbar"
                                        type="submit"
                                    >
                                        <i className="fas fa-search" />
                                    </button>
                                    <button
                                        className="btn btn-navbar"
                                        type="button"
                                        data-widget="navbar-search"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-comments" />
                        <span className="badge badge-danger navbar-badge">
                            3
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider" />

                        <div className="dropdown-divider" />

                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">
                            See All Messages
                        </a>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-bell" />
                        <span className="badge badge-warning navbar-badge">
                            15
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-header">
                            15 Notifications
                        </span>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> 4 new
                            messages
                            <span className="float-right text-muted text-sm">
                                3 mins
                            </span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend
                            requests
                            <span className="float-right text-muted text-sm">
                                12 hours
                            </span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">
                                2 days
                            </span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">
                            See All Notifications
                        </a>
                    </div>
                </li> */}

                <li className="nav-item">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        Menu
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider" />
                        {auth?.admin && (
                            <Link href="/admin/akun" className="dropdown-item">
                                List Akun
                            </Link>
                        )}
                        {auth?.guru && (
                            <Link
                                href="/guru/auth/edit_password"
                                className="dropdown-item"
                            >
                                Ubah Password
                            </Link>
                        )}

                        <button
                            onClick={handleLogout}
                            className="dropdown-item"
                        >
                            Logout
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
