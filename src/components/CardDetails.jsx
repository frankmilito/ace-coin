import classes from "../styles/payment.module.css";
import master_card_logo from "../assets/mastercard_logo.svg";
import chipset from "../assets/chip.png";
import wifi_img from "../assets/wifi.png";
const CardDetails = ({ expiryYear, expiryMonth }) => {
  return (
    <div className={classes.hoverContainer}>
      <div className={classes.mastercard_container}>
        <div className={classes.imageDiv}>
          <img src={chipset} alt="chipset" />
          <img src={wifi_img} alt="wifi" />
        </div>
        <div className={classes.content}>
          <p className={classes.name}>Jonathan Michael</p>
          <div className={classes.card_no}>
            <p className={classes.dots}>.....</p> <p>{3456}</p>
          </div>
          <div className={classes.card_dets}>
            <p>{`${expiryMonth}/${expiryYear}`}</p>
            <img src={master_card_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
