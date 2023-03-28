import React from "react";
import { HeaderLayout } from "../Components/ComponentLayout";
import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout";

const Dashboard = ({ auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Tahun Ajaran" breadcrumbs={["Dashboard"]} />
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    <button className="btn btn-primary">cs</button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
