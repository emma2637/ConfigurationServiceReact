import React from "react";
//functional component
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-group">
      <label>{label}</label>
    <input
      className="form-control mt-2"
      onChange={handleChange}
      {...otherProps}
    ></input>

  </div>
);

export default FormInput;
