import React from "react";
import { HeaderLayout } from "../Components/ComponentLayout";
import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout";

const Dashboard = ({ auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Dashboard" breadcrumbs={["Dashboard"]} />
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>
                                    <p>Total Murid</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>
                                        53
                                        <sup style={{ fontSize: "20px" }}>
                                            %
                                        </sup>
                                    </h3>
                                    <p>Total Guru</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>
                                    <p>Total Mapel</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>65</h3>
                                    <p>Unique Visitors</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
