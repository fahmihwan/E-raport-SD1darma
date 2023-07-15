import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import AdminLTELogo from "../../../public/dist/img/AdminLTELogo.png";
import UserLogo from "../../../public/dist/img/user2-160x160.jpg";
export const Sidebar = ({ auth }) => {
    const [toggleMaster, setToggleMaster] = useState(false);
    const { url, component } = usePage();

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link href="/admin/dashboard" className="brand-link">
                {/* <img
                    src={AdminLTELogo}
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                /> */}
                <span className="brand-text text-warning p-2 font-bold">
                    SD DAHROMO E-raport
                </span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar ">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex ">
                    <div
                        className="bg-white d-flex rounded-circle align-items-center justify-content-center ml-3"
                        style={{ width: "30px", height: "30px" }}
                    >
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">
                            {auth?.admin?.nama ?? auth?.guru?.nama}
                        </a>
                    </div>
                </div>
                {/* SidebarSearch Form */}

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item ">
                            <Link
                                href="/admin/dashboard"
                                className={`nav-link ${
                                    url.startsWith("/admin/dashboard") &&
                                    "active"
                                }`}
                            >
                                {/* <i className="nav-icon fas fa-th" /> */}
                                <i className="nav-icon fas fa-home"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
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
                                        {/* <i className="nav-icon fas fa-tachometer-alt" /> */}
                                        {/* <i class="nav-icon far fa-lock"></i> */}
                                        <i className="nav-icon fas fa-lock"></i>
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
                                        {/* <i className="nav-icon fas fa-th" /> */}
                                        <i className="nav-icon fas fa-chalkboard-teacher"></i>
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
                                        {/* <i className="nav-icon fas fa-th" /> */}
                                        <i className="nav-icon fas fa-users"></i>
                                        <p>Murid</p>
                                    </Link>
                                </li>
                                <li className="nav-header">Kelola Data</li>
                                <li className="nav-item ">
                                    <Link
                                        href="/admin/mengikuti"
                                        className={`nav-link ${
                                            url.startsWith("/admin/mengikuti")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {/* <i className="nav-icon fas fa-th" /> */}
                                        <i className="nav-icon fas fa-calendar-check"></i>
                                        {/* <p> Ajaran Baru</p> */}
                                        <p> Wali kelas</p>
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
                                        {/* <i className="nav-icon fas fa-th" /> */}
                                        <i className="nav-icon fas fa-user-clock"></i>
                                        <p>Kelola Pengajar</p>
                                    </Link>
                                </li>
                                <li className="nav-header">Alumni</li>
                                <li className="nav-item">
                                    <Link
                                        href="/admin/perpindahan"
                                        className={`nav-link ${
                                            url.startsWith("/admin/perpindahan")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {/* <i className="nav-icon fas fa-th" /> */}
                                        <i className="nav-icon fas fa-user-graduate"></i>
                                        <p>Perpindahan Murid</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="/admin/rapor-murid"
                                        className={`nav-link ${
                                            url.startsWith("/admin/rapor-murid")
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <i className="nav-icon fas fa-book"></i>
                                        <p>Rapor Murid</p>
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
                                        {/* <i className="nav-icon fas fa-th" /> */}
                                        <i className="nav-icon fas fa-tasks"></i>
                                        <p>Nilai Mengajar</p>
                                    </Link>
                                </li>
                                {auth?.guru?.is_wali_kelas && (
                                    <>
                                        <li className="nav-header">
                                            Wali Kelas
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/guru/nilai-kepribadian"
                                                className={`nav-link ${
                                                    url.startsWith(
                                                        "/guru/nilai-kepribadian"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                {/* <i className="nav-icon fas fa-th" /> */}
                                                <i className="nav-icon fas fa-walking"></i>
                                                <p>Nilai Kepribadian Murid</p>
                                            </Link>
                                        </li>
                                    </>
                                )}
                                {auth?.guru?.is_wali_kelas && (
                                    <>
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
                                                {/* <i className="nav-icon fas fa-th" /> */}
                                                <i className="nav-icon fas fa-folder-open"></i>
                                                <p>Nilai peserta didik</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                href="/guru/rapor-murid"
                                                className={`nav-link ${
                                                    url.startsWith(
                                                        "/guru/rapor-murid"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <i className="nav-icon fas fa-book"></i>
                                                <p>Rapor Murid</p>
                                            </Link>
                                        </li>
                                    </>
                                )}
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
