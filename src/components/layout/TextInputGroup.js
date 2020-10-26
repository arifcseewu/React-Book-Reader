import React from "react";
import propTypes from "prop-types";

const TextInputGroup = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={error ? "form-control is-valid" : "form-control"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  error: propTypes.string,
};
TextInputGroup.defaultPrpos = {
  type: "text",
};

export default TextInputGroup;
