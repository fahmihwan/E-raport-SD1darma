import React from "react";
import { HeaderLayout } from "../Components/ComponentLayout";
import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout";

const Dashboard = ({ auth, stat, tahun_ajaran }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Dashboard" breadcrumbs={["Dashboard"]} />
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6 ">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{stat?.tahun_ajaran}</h3>
                                    <p>Tahun Ajaran Sekarang</p>
                                </div>
                                <div className="icon">
                                    {/* <i className="ion ion-person-add" /> */}
                                    {/* <i className="fas fa-book-open"></i> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{stat?.total_murid}</h3>
                                    <p>Total Murid</p>
                                </div>
                                <div className="icon">
                                    {/* <i className="ion ion-bag" /> */}

                                    <i className="fas fa-users"></i>
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{stat?.total_guru}</h3>
                                    <p>Total Guru</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{stat?.total_mapel}</h3>
                                    <p>Total Mapel</p>
                                </div>
                                <div className="icon">
                                    {/* <i className="ion ion-person-add" /> */}
                                    <i className="fas fa-book-open"></i>
                                </div>
                            </div>
                        </div>
                        {/* ./col */}

                        {/* ./col */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
