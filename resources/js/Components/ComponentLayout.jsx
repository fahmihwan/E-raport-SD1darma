import React from "react";

export const HeaderLayout = ({ title, breadcrumbs }) => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0"> {title}</h1>
                    </div>
                    {/* /.col */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {breadcrumbs?.map((d, i) => (
                                <li
                                    key={i}
                                    className={`breadcrumb-item ${
                                        breadcrumbs[breadcrumbs.length - 1] ==
                                            d && "active"
                                    }`}
                                >
                                    {d}
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
        </div>
    );
};

export const MainLayout = () => {
    return <div>ContentLayout</div>;
};

export const ButtonModalComponent = ({ id, title }) => {
    return (
        <button
            type="button"
            className="btn  btn-primary"
            data-toggle="modal"
            data-target={"#" + id}
        >
            {title}
        </button>
    );
};

export const ModalLayout = ({ children, id, title, closeModalRef }) => {
    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button
                            ref={closeModalRef}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
};

export const AlertDanger = ({ title }) => {
    return (
        <div className="alert alert-danger" role="alert">
            {title}
        </div>
    );
};
