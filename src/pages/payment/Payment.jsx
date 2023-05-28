import classes from "./payment.module.css";
import logo from "../../assets/bank-card.png";
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
              <div>
                <img src="" alt="edit icon" /> <small>Edit</small>
              </div>
            </div>
            <div className={classes.cardInput}>
              <input
                type="text"
                className={classes.input}
                placeholder="0000 - 1111 - 2222 - 3333"
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
            <input type="text" className={classes.paynowBtn} />
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
