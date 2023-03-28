import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import {
    AlertDanger,
    ButtonModalComponent,
    HeaderLayout,
    ModalLayout,
} from "../../../Components/ComponentLayout";
import { InputText } from "../../../Components/InputEL";
import { Pagination } from "../../../Components/Pagination";
import { AuthenticatedLayout } from "../../../Layouts/AuthenticatedLayout";

const Index = () => {
    const { datas, errors, auth } = usePage().props;

    const { data, setData, post, processing, reset } = useForm({
        tahun_ajaran: "",
    });

    const closeModalRef = useRef(null);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await post("/admin/master/tahun_ajaran");
        closeModalRef.current.click();
        setData("tahun_ajaran", "");
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        confirm("apakah anda yakin ingin menghapus?") &&
            Inertia.delete("/admin/master/tahun_ajaran/" + id);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title="Tahun Ajaran"
                breadcrumbs={["Master", "List tahun ajaran"]}
            />
            <div className="content">
                <div className="container-fluid">
                    {errors?.tahun_ajaran && (
                        <AlertDanger title={errors?.tahun_ajaran} />
                    )}
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">
                                    List Tahun Ajaaran
                                </h3>
                                <ButtonModalComponent
                                    id="modal-default"
                                    title="tambah data"
                                />
                            </div>

                            <ModalLayout
                                id="modal-default"
                                title="Tahun Ajaran"
                                closeModalRef={closeModalRef}
                            >
                                <form onSubmit={handleSubmit}>
                                    <InputText
                                        title="tahun ajaran"
                                        name="tahun_ajaran"
                                        placeholder={`Ex: ${
                                            new Date().getFullYear() - 1
                                        }/${new Date().getFullYear()}`}
                                        handleChange={handleChange}
                                        value={data.tahun_ajaran}
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary float-right"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </ModalLayout>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>Tahun Ajaran</th>
                                        <th>Created at</th>
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.data.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas.from}</td>
                                            <td>{d.tahun_ajaran}</td>
                                            <td>{d.created_at}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                        handleDelete(e, d.id)
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
                            <Pagination
                                links={datas.links}
                                totals={datas.total}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
