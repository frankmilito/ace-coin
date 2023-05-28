import classes from "./payment.module.css";
import logo from "../../assets/bank-card.png";
import edit from "../../assets/edit_icon.svg";
import master_card_icon from "../../assets/mastercard_icon.svg";
import master_card_logo from "../../assets/mastercard_logo.svg";
import verified from "../../assets/verified_icon.svg";
import dotted from "../../assets/dots.svg";
import chipset from "../../assets/chip.png";
import wifi_img from "../../assets/wifi.png";
import scroll from "../../assets/ancient-scroll.png";
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
                src={verified}
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
                  placeholder="003"
                />
                <img src={dotted} alt="" />
              </div>
            </div>
            <div className={classes.expiry_content}>
              <div className={classes.expirt_details}>
                <h3>Expiry Date</h3>
                <p>Enter the expiration date of the card</p>
              </div>
              <div className={classes.expiry}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="000"
                />
                <div>/</div>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="344"
                />
              </div>
            </div>
            <div className={classes.password}>
              <div>
                <h3>Password</h3>
                <p>Enter your dynamic password</p>
              </div>
              <div className={classes.passwordInput}>
                <input
                  type="password"
                  className={classes.input}
                  value={"hellowork"}
                />
                <img src={dotted} alt="" />
              </div>
            </div>
            <button className={classes.paynowBtn}>Pay Now</button>
          </div>
        </section>
        <section className={classes.rightContainer}>
          <div className={classes.mainWrapper}>
            <div className={classes.blueDiv}></div>
            <div className={classes.hoverContainer}>
              <div className={classes.mastercard_container}>
                <div className={classes.imageDiv}>
                  <img src={chipset} alt="chipset" />
                  <img src={wifi_img} alt="wifi" />
                </div>
                <div className={classes.content}>
                  <p className={classes.name}>Jonathan Michael</p>
                  <div className={classes.card_no}>
                    <p className={classes.dots}>.....</p> <p>3456</p>
                  </div>
                  <div className={classes.card_dets}>
                    <p>09/22</p>
                    <img src={master_card_logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.paymentInfo}>
              <div style={{ width: "100%" }}>
                <div className={classes.content}>
                  <div className={classes.details}>
                    <p>Company</p>
                    <h3>Apple</h3>
                  </div>
                  <div className={classes.details}>
                    <p>Order Number</p>
                    <h3>1266201</h3>
                  </div>
                  <div className={classes.details}>
                    <p>Product</p>
                    <h3>Macbook Air</h3>
                  </div>
                  <div className={classes.details}>
                    <p>VAT (20%)</p>
                    <h3>$100.00</h3>
                  </div>
                  <br />
                </div>
                <div className={classes.summary}>
                  <div className={classes.leftcircle}></div>
                  <div className={classes.rightcircle}></div>
                  <br />
                  <p className={classes.title}>You have to pay</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p className={classes.amount}>
                      549.<small>99</small>
                      <small>USD</small>
                    </p>
                    <img src={scroll} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Payment;
