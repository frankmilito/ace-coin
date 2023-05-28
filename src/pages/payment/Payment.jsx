import { useState } from "react";
import classes from "../../styles/payment.module.css";
import logo from "../../assets/bank-card.png";
import edit from "../../assets/edit_icon.svg";
import dotted from "../../assets/dots.svg";
import MasterCard from "../../components/MasterCard";
import CardInput from "../../components/CardInput";
import Timer from "../../components/Timer";
import CardDetails from "../../components/CardDetails";
import PaymentInfo from "../../components/PaymentInfo";

const Payment = () => {
  const [expiryMonth, setExpiryMonth] = useState("09");
  const [expiryYear, setExpiryYear] = useState("22");
  const [cvv, setCvv] = useState("327");
  const [password, setPassword] = useState("testing");
  const [isEdit, setisEdit] = useState(true);

  return (
    <main className={classes.paymentContainer}>
      <div className={classes.paymentWrapper}>
        <section className={classes.leftContainer}>
          <div className={classes.header}>
            <div className={classes.title}>
              <img src={logo} alt="logo" className={classes.logo} />
              <h2>AceCoin</h2>
              <h2 className={classes.subtitle}>Pay</h2>
            </div>
            <Timer />
          </div>
          <div className={classes.card_details}>
            <div className={classes.card_number}>
              <div>
                <h3>Card Number</h3>
                <p>Enter the 16-digit card number on the card</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setisEdit(!isEdit)}
              >
                <img src={edit} alt="edit icon" className={classes.edit} />
                <h5>Edit</h5>
              </div>
            </div>
            <MasterCard isEdit={isEdit} />
            <div className={classes.cvv}>
              <div>
                <h3>CVV Number</h3>
                <p>Enter the 3 or 4 digit card number on the card</p>
              </div>
              <CardInput
                image={dotted}
                value={cvv}
                handleChange={(e) => setCvv(e.target.value)}
                maxLength={4}
              />
            </div>
            <div className={classes.expiry_content}>
              <div className={classes.expirt_details}>
                <h3>Expiry Date</h3>
                <p>Enter the expiration date of the card</p>
              </div>
              <div className={classes.expiry}>
                <CardInput
                  value={expiryMonth}
                  handleChange={(e) => setExpiryMonth(e.target.value)}
                />
                <div>/</div>
                <CardInput
                  value={expiryYear}
                  handleChange={(e) => setExpiryYear(e.target.value)}
                />
              </div>
            </div>
            <div className={classes.password}>
              <div>
                <h3>Password</h3>
                <p>Enter your dynamic password</p>
              </div>
              <CardInput
                image={dotted}
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <button className={classes.paynowBtn}>Pay Now</button>
          </div>
        </section>
        <section className={classes.rightContainer}>
          <div className={classes.mainWrapper}>
            <div className={classes.blueDiv}></div>
            <CardDetails />
            <PaymentInfo />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Payment;
