import React from "react";

const CustomButton = ({ text, btnClass, ...otherProps }) => (
  
    <button className={`btn ${btnClass} btn-block mt-4`} {...otherProps}>
      {text}
    </button>
 
);

export default CustomButton;
