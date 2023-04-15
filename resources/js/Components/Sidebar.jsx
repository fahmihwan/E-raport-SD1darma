import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import AdminLTELogo from "../../../public/dist/img/AdminLTELogo.png";
import UserLogo from "../../../public/dist/img/user2-160x160.jpg";
export const Sidebar = ({ auth }) => {
    const [toggleMaster, setToggleMaster] = useState(false);
    const { url, component } = usePage();
    // url.startsWith("/admin/dashboard")
    return (
        <aside className="main-sidebar  sidebar-dark-warning  elevation-4">
            {/* Brand Logo */}
            <Link href="/admin/dashboard" className="brand-link">
                <img
                    src={AdminLTELogo}
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src={UserLogo}
                            className="img-circle elevation-2"
                            alt="User Image"
                        />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">
                            Alexander Pierce
                        </a>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input
                            className="form-control form-control-sidebar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        {/* <li className="nav-item ">
                            <Link
                                href="/admin/dashboard"
                                className={`nav-link ${
                                    url.startsWith("/admin/dashboard") &&
                                    "active"
                                }`}
                            >
                                <i className="nav-icon fas fa-th" />
                                <p>Dashboard</p>
                            </Link>
                        </li> */}
                        {auth?.admin && (
                            <>
                                <li className="nav-header">Master Data</li>
                                <li
                                    className={`nav-item ${
                                        toggleMaster &&
                                        "menu-is-opening menu-open"
                                    }`}
                                >
                                    <a
                                        href="#"
                                        className={`nav-link ${
                                            url.startsWith("/admin/master")
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setToggleMaster(!toggleMaster)
                                        }
                                    >
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Master Data
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link
                                                href="/admin/master/tahun_ajaran"
                                                className={`nav-link ${
                                                    url ==
                                                        "/admin/master/tahun_ajaran" &&
                                                    "active"
                                                }`}
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Tahun Ajaran</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/admin/master/kelas"
                                                className={`nav-link ${
                                                    url ==
                                                        "/admin/master/kelas" &&
                                                    "active"
                                                }`}
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Kelas</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/admin/master/mapel"
                                                className={`nav-link ${
                                                    url ==
                                                        "/admin/master/mapel" &&
                                                    "active"
                                                }`}
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Mapel</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="/admin/guru"
                                        className={`nav-link ${
                                            url.startsWith("/admin/guru")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Guru</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="/admin/murid"
                                        className={`nav-link ${
                                            url.startsWith("/admin/murid")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Murid</p>
                                    </Link>
                                </li>
                                <li className="nav-header">Kelola Data</li>
                                <li className="nav-item">
                                    <Link
                                        href="/admin/mengikuti"
                                        className={`nav-link ${
                                            url.startsWith("/admin/mengikuti")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p> Ajaran Baru</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="/admin/mengajar"
                                        className={`nav-link ${
                                            url.startsWith("/admin/mengajar")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Kelola Pengajar</p>
                                    </Link>
                                </li>
                            </>
                        )}
                        {auth?.guru && (
                            <>
                                <li className="nav-header">Kelola Nilai</li>

                                <li className="nav-item">
                                    <Link
                                        href="/guru/penilaian"
                                        className={`nav-link ${
                                            url.startsWith("/guru/penilaian")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Nilai Mengajar</p>
                                    </Link>
                                </li>
                                <li className="nav-header">Wali Kelas</li>
                                <li className="nav-item">
                                    <Link
                                        href="/guru/penilaian"
                                        className={`nav-link ${
                                            url.startsWith("/guru/penilaias")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Nilai Kepribadian Murid</p>
                                    </Link>
                                </li>
                                <li className="nav-header">Laporan</li>
                                <li className="nav-item">
                                    <Link
                                        href="/guru/nilai-peserta-didik"
                                        className={`nav-link ${
                                            url.startsWith(
                                                "/guru/nilai-peserta-didik"
                                            )
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Nilai Peserta didik</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="/guru/rapor-murid"
                                        className={`nav-link ${
                                            url.startsWith("/guru/rapor-murid")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-th" />
                                        <p>Rapor Murid</p>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );
};
