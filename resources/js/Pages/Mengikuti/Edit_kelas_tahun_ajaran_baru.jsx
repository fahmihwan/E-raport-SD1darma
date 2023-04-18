import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { SelectSearch } from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import ReactSelect from "react-select";

const Edit_kelas_tahun_ajaran_baru = ({
    kelas,
    tahun_ajaran,
    gurus,
    selected,
    auth,
}) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        kelas_id: selected?.kelas_id,
        tahun_ajaran_id: selected?.tahun_ajaran_id,
        guru_id: selected?.guru_id,
    });
    let optionKelas = kelas.map((d) => ({ value: d.id, label: d.nama }));
    let optionGuru = gurus.map((d) => ({ value: d.id, label: d.nama }));
    let optionTahunAjaran = tahun_ajaran.map((d) => ({
        value: d.id,
        label: d.tahun_ajaran,
    }));
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/mengikuti/${selected?.id}/mengikuti_kelas`);
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Edit Ajaran baru"
                breadcrumbs={["Ajaran baru", "Edit Ajaran baru"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header ">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <span>Edit Ajaran Baru</span>
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
                                            {/* <SelectSearch
                                                handleChange={(e) =>
                                                    setData(
                                                        "tahun_ajaran_id",
                                                        e.value
                                                    )
                                                }
                                                options={optionTahunAjaran}
                                            /> */}
                                            <ReactSelect
                                                defaultValue={optionTahunAjaran.filter(
                                                    (d) =>
                                                        d.value ==
                                                        selected?.tahun_ajaran_id
                                                )}
                                                onChange={(e) =>
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
                                            <ReactSelect
                                                defaultValue={optionKelas.filter(
                                                    (d) =>
                                                        d.value ==
                                                        selected?.kelas_id
                                                )}
                                                onChange={(e) =>
                                                    setData("kelas_id", e.value)
                                                }
                                                options={optionKelas}
                                            />
                                            {/* <SelectSearch
                                                handleChange={(e) =>
                                                    setData("kelas_id", e.value)
                                                }
                                                options={optionKelas}
                                            /> */}
                                        </div>
                                        <div className="form-group">
                                            <label>Wali Kelas</label>
                                            <ReactSelect
                                                defaultValue={optionGuru.filter(
                                                    (d) =>
                                                        d.value ==
                                                        selected?.guru_id
                                                )}
                                                onChange={(e) =>
                                                    setData("guru_id", e.value)
                                                }
                                                options={optionGuru}
                                            />
                                            {/* <SelectSearch
                                                handleChange={(e) =>
                                                    setData("guru_id", e.value)
                                                }
                                                options={optionGuru}
                                            /> */}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
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

export default Edit_kelas_tahun_ajaran_baru;
