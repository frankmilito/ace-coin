import classes from "../styles/payment.module.css";
import master_card_icon from "../assets/mastercard_icon.svg";
import verified from "../assets/verified_icon.svg";
import { useState } from "react";
const MasterCard = ({ isEdit, value, handleChange }) => {
  const formatCard = (val) => {
    const formattedVal = val.replaceAll(" - ", "");
    // console.log(formattedVal?.match(/.{1,4}/g)?.join(" - ") || "");
    return formattedVal?.match(/.{1,4}/g)?.join(" - ") || "";
  };
  return (
    <div className={classes.cardInput}>
      <img
        src={master_card_icon}
        alt="master_icon"
        className={classes.master_icon}
      />
      <input
        type="text"
        className={classes.input}
        disabled={isEdit}
        value={formatCard(value)}
        onChange={handleChange}
        maxLength={25}
      />
      <img src={verified} alt="master_logo" className={classes.master_logo} />
    </div>
  );
};

export default MasterCard;
