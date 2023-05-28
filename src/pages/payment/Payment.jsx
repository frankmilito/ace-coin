import classes from "./payment.module.css";
import logo from "../../assets/bank-card.png";
import edit from "../../assets/edit_icon.svg";
import master_card_icon from "../../assets/mastercard_icon.svg";
import master_card_logo from "../../assets/verified_icon.svg";
import dotted from "../../assets/dots.svg";
const Payment = () => {
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
            <div className={classes.timer}>
              <p className={classes.squareBackground}>0</p>
              <p className={classes.squareBackground}>1</p>
              <p className={classes.squareBackground}>:</p>
              <p className={classes.squareBackground}>1</p>
              <p className={classes.squareBackground}>9</p>
            </div>
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
              >
                <img src={edit} alt="edit icon" className={classes.edit} />
                <h5>Edit</h5>
              </div>
            </div>
            <div className={classes.cardInput}>
              <img
                src={master_card_icon}
                alt="master_icon"
                className={classes.master_icon}
              />
              <input
                type="text"
                className={classes.input}
                placeholder="0000 - 1111 - 2222 - 3333"
                disabled={true}
              />
              <img
                src={master_card_logo}
                alt="master_logo"
                className={classes.master_logo}
              />
            </div>
            <div className={classes.cvv}>
              <div>
                <h3>CVV Number</h3>
                <p>Enter the 3 or 4 digit card number on the card</p>
              </div>
              <div className={classes.cvvInput}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="0000 - 1111 - 2222 - 3333"
                />
                <img src={dotted} alt="" />
              </div>
            </div>
            <div className={classes.expiry}>
              <div>
                <h3>Expiry Date</h3>
                <p>Enter the expiration date of the card</p>
              </div>
              <div className={classes.expiry}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="0000 - 1111 - 2222 - 3333"
                />
              </div>
            </div>
            <div className={classes.password}>
              <div>
                <h3>Password</h3>
                <p>Enter your dynamic password</p>
              </div>
              <div className={classes.passwird}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="0000 - 1111 - 2222 - 3333"
                />
              </div>
            </div>
            <button className={classes.paynowBtn}>Pay Now</button>
          </div>
        </section>
        <section className={classes.rightContainer}>
          <h1>RIght content</h1>
        </section>
      </div>
    </main>
  );
};

export default Payment;
