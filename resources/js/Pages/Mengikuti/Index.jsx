import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useRef, useState, useEffect } from "react";
import {
    AlertDanger,
    ButtonModalComponent,
    HeaderLayout,
    ModalLayout,
} from "../../Components/ComponentLayout";
import { InputText, SelectSearch } from "../../Components/InputEL";
import { Pagination } from "../../Components/Pagination";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";

const Index = ({ tahun_ajarans }) => {
    const { datas, errors } = usePage().props;

    const [optionTahunAjaran, setOptionTahunAjaran] = useState(null);
    useEffect(() => {
        let th = tahun_ajarans.map((d) => ({
            value: d.id,
            label: d.tahun_ajaran,
        }));
        setOptionTahunAjaran(th);
    }, []);

    return (
        <AuthenticatedLayout>
            <HeaderLayout
                title="List Mengikuti Kelas"
                breadcrumbs={["Kelola"]}
            />
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="card-title">List</h3>
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">tahun ajaran :</span>
                                    <div className="mr-2">
                                        <SelectSearch
                                            options={optionTahunAjaran}
                                        />
                                    </div>
                                    <button className="btn btn-info">
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "10px" }}>#</th>
                                        <th>Kelas</th>
                                        <th>tahun_ajaran</th>
                                        <th style={{ width: "40px" }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kelas_5</td>
                                        <td>2022/2023</td>
                                        <td>
                                            <Link
                                                href={`/admin/mengajar/1`}
                                                className="btn btn-info"
                                            >
                                                kelola
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* {datas.data?.map((d, i) => (
                                        <tr key={i}>
                                            <td>{i + datas.from}</td>
                                            <td>{d.tahun_ajaran}</td>
                                            <td>{d.created_at}</td>
                                            <td>
                                                <Link
                                                    href={`/admin/mengajar/${d.id}`}
                                                    className="btn btn-info"
                                                >
                                                    kelola
                                                </Link>
                                            </td>
                                        </tr>
                                    ))} */}
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

export default Index;
