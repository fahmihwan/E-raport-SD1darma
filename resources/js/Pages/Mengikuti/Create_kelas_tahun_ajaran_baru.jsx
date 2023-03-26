import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { SelectSearch } from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Create_kelas_tahun_ajaran_baru = ({ kelas, tahun_ajaran, gurus }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kelas_id: "",
        tahun_ajaran_id: "",
        guru_id: "",
    });
    let optionKelas = kelas.map((d) => ({ value: d.id, label: d.nama }));
    let optionGuru = gurus.map((d) => ({ value: d.id, label: d.nama }));
    let optionTahunAjaran = tahun_ajaran.map((d) => ({
        value: d.id,
        label: d.tahun_ajaran,
    }));
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/mengikuti/create_kelas_tahun_ajaran_baru");
    };
    return (
        <AuthenticatedLayout>
            <HeaderLayout
                title="Tambah Periode Kelas"
                breadcrumbs={["List Periode Kelas", "Tambah Periode Kelas"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header ">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <span>Tambah Periode Kelas</span>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            href={`/admin/mengikuti`}
                                        >
                                            Kembali
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Tahun Ajaran</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData(
                                                        "tahun_ajaran_id",
                                                        e.value
                                                    )
                                                }
                                                options={optionTahunAjaran}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Kelas</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("kelas_id", e.value)
                                                }
                                                options={optionKelas}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Wali Kelas</label>
                                            <SelectSearch
                                                handleChange={(e) =>
                                                    setData("guru_id", e.value)
                                                }
                                                options={optionGuru}
                                            />
                                        </div>

                                        <button
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
            </div>
        </AuthenticatedLayout>
    );
};

export default Create_kelas_tahun_ajaran_baru;
