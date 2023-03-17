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

export const InputRadioButton = ({ title, name, handleChange, isError }) => {
    const idEl = title.toLowerCase().split(" ").join("-");
    const defaultValue = title.toLowerCase();

    return (
        <div className="form-check is-invalid mr-4">
            <input
                className={`form-check-input `}
                type="radio"
                name={name}
                id={idEl}
                required
                onChange={(e) => handleChange(e)}
                value={defaultValue}
            />
            <label className="form-check-label" htmlFor={idEl}>
                {title}
            </label>
        </div>
    );
};

export const InputTextArea = ({
    title,
    name,
    placeholder,
    handleChange,
    value,
    isError,
}) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{title}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={value}
            />
        </div>
    );
};
