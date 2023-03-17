import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

export const AuthenticatedLayout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    return (
        <div
            className={`sidebar-mini ${toggleSidebar && "sidebar-collapse"}`}
            style={{ height: "100vh" }}
        >
            <div className="wrapper">
                {/* Navbar */}
                <Navbar
                    setToggleSidebar={setToggleSidebar}
                    toggleSidebar={toggleSidebar}
                />
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <Sidebar />
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    {children}
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
            </div>
        </div>
    );
};
