import React, { useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { SelectSearch } from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create = ({ auth, murid }) => {
    let year = new Date().getFullYear();
    const { data, setData, post, processing, errors, reset } = useForm({
        murid_id: "",
        keterangan: "lulus",
        tahun: year,
    });
    let optionMurid = murid.map((d) => ({
        value: d.id,
        label: `[${d.no_induk}] - ${d.nama}`,
    }));

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        post("/admin/perpindahan");
    };

    let optionYear = [];
    year += 1;
    for (let i = 1; i < 5; i++) {
        optionYear.push(--year);
    }
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Tambah Murid"
                breadcrumbs={["perpindahan", "Tambah murid"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header ">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <span>Tambah Murid</span>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        href="/admin/perpindahan"
                                    >
                                        Kembali
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Murid</label>
                                        <SelectSearch
                                            handleChange={(e) =>
                                                setData("murid_id", e.value)
                                            }
                                            options={optionMurid}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Tahun</label>
                                        <select
                                            name="tahun"
                                            id="tahun"
                                            onChange={handleChange}
                                            className="form-control"
                                        >
                                            {optionYear.map((d) => (
                                                <option key={d} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Keterangan</label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                onChange={handleChange}
                                                name="keterangan"
                                                id="exampleRadios1"
                                                defaultValue="lulus"
                                                defaultChecked={data.keterangan}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleRadios1"
                                            >
                                                Lulus / Alumni
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                onChange={handleChange}
                                                name="keterangan"
                                                id="exampleRadios1"
                                                defaultValue="pindah"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleRadios1"
                                            >
                                                Pindah
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        disabled={processing}
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
