import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import {
    ButtonModalComponent,
    HeaderLayout,
    ModalLayout,
} from "../../Components/ComponentLayout";
import { SelectSearch } from "../../Components/InputEL";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const List_siswa = ({ murid, mengikuti_kelas_id, auth }) => {
    const { datas, errors } = usePage().props;
    const closeModalRef = useRef(null);
    const { data, setData, post, processing, reset } = useForm({
        murid_id: "",
        mengikuti_kelas_id: mengikuti_kelas_id,
    });

    let optionMurid = murid.map((d) => ({
        value: d.id,
        label: `[${d.no_induk}] - ${d.nama}`,
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post("/admin/mengikuti/store_siswa_baru");
        closeModalRef.current.click();
        setData("murid_id", "");
    };
    const handleDelete = (id) => {
        Inertia.delete(`/admin/mengikuti/${id}/mengikuti_ajaran`);
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={`List ${datas.kelas.nama}`}
                breadcrumbs={["Ajaran baru", "list murid"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="mb-2">
                        <ButtonModalComponent
                            id="modal-default"
                            title="Tambah Murid Baru"
                        />
                        {/* <button className="ml-2 btn btn-info">
                            Kelola Kelulusan
                        </button> */}
                    </div>

                    <ModalLayout
                        id="modal-default"
                        title="Tahun Ajaran"
                        closeModalRef={closeModalRef}
                    >
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
                            <button
                                disabled={processing}
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Submit
                            </button>
                        </form>
                    </ModalLayout>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="card-title">List Murid</h3>
                                </div>
                                <div className="d-flex justify-content-between align-items-center ">
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        href={`/admin/mengikuti`}
                                    >
                                        Kembali
                                    </Link>
                                </div>
                                {/* <div className="d-flex align-items-center">
                                    <div className="mr-2"></div>
                                </div> */}
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>Nama</th>
                                        <th>No Induk</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Tempat Lahir</th>
                                        <th>Tgl Lahir</th>
                                        <th>Agama</th>
                                        <th>Alamat</th>
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas?.mengikuti_ajarans?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{d.murid.nama}</td>
                                            <td>{d.murid.no_induk}</td>
                                            <td>{d.murid.jenis_kelamin}</td>
                                            <td>{d.murid.tempat_lahir}</td>
                                            <td>{d.murid.tanggal_lahir}</td>
                                            <td>{d.murid.agama}</td>
                                            <td>{d.murid.alamat}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        handleDelete(d.id)
                                                    }
                                                >
                                                    <i className="fas fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix">
                            {/* <Pagination
                                links={datas.links}
                                totals={datas.total}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default List_siswa;
