import React from "react";

export const InputEL = () => {
    return <div>InputEL</div>;
};

export const InputText = ({
    title,
    name,
    placeholder,
    handleChange,
    value,
    isError,
}) => {
    return (
        <div className="form-group">
            <div>
                <label htmlFor={name}>{title}</label>
                <input
                    type="text"
                    className={`form-control ${isError && "is-invalid"}`}
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    aria-describedby="validationServer03Feedback"
                    required
                />
                <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                >
                    {isError}
                </div>
            </div>
        </div>
    );
};
