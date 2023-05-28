import React from "react";
import classes from "../styles/payment.module.css";
const CardInput = ({ value, handleChange, image, maxLength, type }) => {
  return (
    <div className={classes.cvvInput}>
      <input
        type={type || "text"}
        className={classes.input}
        onChange={handleChange}
        value={value}
        maxLength={maxLength || 2}
      />
      {image && <img src={image} alt="" />}
    </div>
  );
};

export default CardInput;
