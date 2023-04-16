import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { HeaderLayout } from "../../Components/ComponentLayout";
import { AuthenticatedLayout } from "../../Layouts/AuthenticatedLayout";
import { InputText } from "../../Components/InputEL";

// 'datas' => $datas,
// 'tahun_ajaran' => $tahun_ajaran,
// 'semester' => $semester,
// 'guru' => $view_guru
const Create_nilai_kepribadian = ({
    auth,
    detailCard,
    mengikuti_ajaran_id,
    semester,
    nilai_if_exist,
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        mengikuti_ajaran_id: mengikuti_ajaran_id,
        semester: semester,
        izin: "",
        sakit: "",
        tanpa_keterangan: "",
        sikap: "",
        kerajinan: "",
        kebersihan_dan_kerapian: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        post("/guru/nilai-kepribadian");
    };

    let data_kepribadian = ["A", "B", "C", "D", "E"];
    return (
        <AuthenticatedLayout auth={auth}>
            <HeaderLayout
                title={"Create Nilai Kepribadian Siswa"}
                breadcrumbs={[
                    "Nilai Peserta Didik",
                    "Create Nilai Kepribadian Siswa",
                ]}
            />
            <div className="content">
                <div className="container-fluid">
                    <Link
                        href="/guru/nilai-kepribadian"
                        className="btn btn-primary mb-2  float-right"
                    >
                        kembali
                    </Link>
                    <div className="clearfix"></div>
                    <CardDetail
                        data_murid={detailCard?.data_murid}
                        kelas={detailCard?.kelas}
                        semester={detailCard?.semester}
                        tahun_ajaran={detailCard?.tahun_ajaran}
                    />

                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">
                                        tahun ajaran :{" "}
                                        {detailCard?.tahun_ajaran}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row ">
                                {/* {nilai_if_exist ? ()} */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="col-md-12"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputText
                                                title="Izin"
                                                type="number"
                                                name="izin"
                                                placeholder="Input izin"
                                                handleChange={handleChange}
                                                value={data.izin}
                                            />
                                            <InputText
                                                title="sakit"
                                                name="sakit"
                                                type="number"
                                                placeholder="Input sakit"
                                                handleChange={handleChange}
                                                value={data.sakit}
                                            />
                                            <InputText
                                                title="tanpa keterangan"
                                                name="tanpa_keterangan"
                                                type="number"
                                                placeholder="Input tanpa keterangan"
                                                handleChange={handleChange}
                                                value={data.tanpa_keterangan}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"sikap"}>
                                                    sikap
                                                </label>
                                                <div className="input-group mb-3">
                                                    <select
                                                        className="custom-select"
                                                        id="inputGroupSelect02"
                                                        defaultValue={"DEFAULT"}
                                                        name="sikap"
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value="DEFAULT"
                                                            disabled
                                                        >
                                                            -- pilih --
                                                        </option>
                                                        {data_kepribadian.map(
                                                            (d) => (
                                                                <option
                                                                    key={d}
                                                                    value={d}
                                                                >
                                                                    {d}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={"kerajinan"}>
                                                    kerajinan
                                                </label>
                                                <div className="input-group mb-3">
                                                    <select
                                                        className="custom-select"
                                                        id="inputGroupSelect02"
                                                        defaultValue={"DEFAULT"}
                                                        name="kerajinan"
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value="DEFAULT"
                                                            disabled
                                                        >
                                                            -- pilih --
                                                        </option>
                                                        {data_kepribadian.map(
                                                            (d) => (
                                                                <option
                                                                    key={d}
                                                                    value={d}
                                                                >
                                                                    {d}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={"kerajinan"}>
                                                    kebersihan dan kerapian
                                                </label>
                                                <div className="input-group mb-3">
                                                    <select
                                                        className="custom-select"
                                                        id="inputGroupSelect02"
                                                        defaultValue={"DEFAULT"}
                                                        name="kebersihan_dan_kerapian"
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value="DEFAULT"
                                                            disabled
                                                        >
                                                            -- pilih --
                                                        </option>
                                                        {data_kepribadian.map(
                                                            (d) => (
                                                                <option
                                                                    key={d}
                                                                    value={d}
                                                                >
                                                                    {d}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix"></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create_nilai_kepribadian;

const CardDetail = ({ data_murid, kelas, semester, tahun_ajaran }) => {
    return (
        <div className="card p-2">
            <div className="row">
                <div className="col-md-6">
                    <h3>Detail :</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "100px" }}>Nama Siswa</td>
                                <td>: {data_murid.murid.nama}</td>
                            </tr>
                            <tr>
                                <td>Nomor Induk</td>
                                <td>: {data_murid.murid.no_induk}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>&nbsp;</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "100px" }}>Tahun ajaran</td>
                                <td>: {tahun_ajaran}</td>
                            </tr>
                            <tr>
                                <td>Semester</td>
                                <td>: {semester}</td>
                            </tr>
                            <tr>
                                <td>Kelas</td>
                                <td>: {kelas}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
