import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import { SelectSearch } from "../../Components/InputEL";
import ReactSelect from "react-select";

const Index = ({ murid, auth }) => {
    const [optionMurid, setOptionMurid] = useState([]);
    const [idMurid, setIdMurid] = useState();

    useEffect(() => {
        let option = murid.map((d) => ({
            value: d.id,
            label: `[${d?.no_induk}]-[${d?.nama}]`,
        }));
        setOptionMurid(option);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/admin/rapor-murid/${idMurid}/detail`);
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout title="Cari raport" breadcrumbs={["Cari raport"]} />
            <div className="content">
                <div className="container-fluid">
                    <div className="mb-2"></div>

                    <section className="content">
                        <div className="container-fluid">
                            <h2 className="text-center display-4">Search</h2>
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <form onSubmit={handleSearch}>
                                        <div className="d-flex">
                                            <ReactSelect
                                                placeholder={
                                                    "Cari berdasarkan nama atau no induk"
                                                }
                                                onChange={(e) =>
                                                    setIdMurid(e.value)
                                                }
                                                options={optionMurid}
                                                styles={{
                                                    control: () => ({
                                                        // none of react-select's styles are passed to <Control />
                                                        width: 500,
                                                        background: "white",
                                                        height: 50,
                                                        radius: 40,
                                                        marginRight: "5px",
                                                        border: "1px solid grey",
                                                        borderRadius: 5,
                                                        display: "flex",
                                                    }),
                                                }}
                                            />
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Cari
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">{/*  */}</div>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
const NilaiMapelsEl = ({ nilai_mapel, semester }) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th style={{ width: "20px" }}>No</th>
                    <th>Mata Pelajaran</th>
                    <th>KKM</th>
                    <th>Nilai Siswa</th>
                </tr>
            </thead>
            <tbody>
                {nilai_mapel
                    ?.filter((d) => d.semester == semester)
                    .map((d, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{d?.mapel?.nama}</td>
                            <td>{d?.mapel?.kkm}</td>
                            <td> {d?.nilai}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
const NilaiKepribadiansEl = ({ nilai_kepribadian }) => {
    return (
        <>
            <div className="col-md-6">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Izin</td>
                            <td>{nilai_kepribadian?.izin}</td>
                        </tr>
                        <tr>
                            <td>Sakit</td>
                            <td>{nilai_kepribadian?.sakit}</td>
                        </tr>
                        <tr>
                            <td>Tanpa Keterangan</td>
                            <td>{nilai_kepribadian?.tanpa_keterangan}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Sikap</td>
                            <td>{nilai_kepribadian?.sikap}</td>
                        </tr>
                        <tr>
                            <td>Kerajinan</td>
                            <td>{nilai_kepribadian?.kerajinan}</td>
                        </tr>
                        <tr>
                            <td>Kebersihan dan kerapian</td>
                            <td>
                                {nilai_kepribadian?.kebersihan_dan_kerapian}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
